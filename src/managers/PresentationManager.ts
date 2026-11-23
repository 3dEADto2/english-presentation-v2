import { type Ref } from 'vue';

export interface registeredStep {
    type: 'step';
    topic?: string;
    isShown: Ref<boolean>;
    countTowardsProgress?: boolean;
    hidePrevious?: number[];
}

export interface ProgressInfo {
    progress: number;
    currentStepIndex: number;
    totalSteps: number;
    currentStepId?: string;
    currentStepIdAddition?: string;
    topic?: string;
}

export class PresentationManager {
    private animationState = 0;
    private stepIds: string[] = [];
    private currentStepIndex = -1;

    private steps: Record<string, registeredStep[]> = {};

    private progressEventListeners: Array<(progress: ProgressInfo) => void> = [];

    constructor() {
        window.addEventListener('keypress', this.handleKeyPress.bind(this))
    }

    private handleKeyPress(event: KeyboardEvent) {
        const { code } = event;

        switch (code) {
            case 'Space':
                this.forwardHandler();
                break;
            case 'KeyQ':
                this.backBy(1);
                break;
        }
    }

    private forwardHandler() {
        if (this.animationState) return;

        const currentStepId = this.stepIds[++this.currentStepIndex];
        if (currentStepId === undefined) {
            this.currentStepIndex--;
            return;
        }

        const currentSteps = this.steps[currentStepId];
        if (!Array.isArray(currentSteps)) return;

        currentSteps.forEach((step) => {
            if (step.hidePrevious) {
                this.setStepsState(step.hidePrevious, false)
            }
            step.isShown.value = true
        });

        this.callProgress();
    }

    public registerStep(stepIdNum: number, step: registeredStep) {
        const stepId = stepIdNum.toString();

        let stepsArray = this.steps[stepId];
        if (!Array.isArray(stepsArray)) {
            stepsArray = [];
        }

        stepsArray.push(step);
        this.steps[stepId] = stepsArray;

        this.stepIds = Array.from(new Set([ ...this.stepIds, stepId ]))

        this.stepIds.sort((a, b) => Number(a) - Number(b));
    }

    public addAnimationState() {
        this.animationState++;
    }

    public removeAnimationState() {
        this.animationState = Math.max(0, this.animationState - 1);
    }

    public callNext() {
        this.forwardHandler();
    }

    public setStepsState(stepIds: number[], isShown: boolean) {
        stepIds.forEach((stepIdNum) => {
            const stepId = stepIdNum.toString();

            const loadedStepIds = this.stepIds.filter((loadedId) => {
                const [num1, num2] = loadedId.split('.');
                return num1 === stepId;
            })

            loadedStepIds.forEach((loadedStepId) => {
                const steps = this.steps[loadedStepId];
                if (!Array.isArray(steps)) return;

                steps.forEach((step) => step.isShown.value = isShown);
            })
        })
    }

    private backBy(steps: number) {
        if (this.animationState) return;

        const oldIndex = this.currentStepIndex;
        this.currentStepIndex = Math.max(-1, this.currentStepIndex - steps);

        for (let i = oldIndex; i > this.currentStepIndex; i--) {
            const stepId = this.stepIds[i];
            if (stepId === undefined) continue;

            const steps = this.steps[stepId];

            if (!Array.isArray(steps)) continue;
            
            steps.forEach((step) => step.isShown.value = false);
        }

        this.callProgress();
    }

    public onProgress(listener: (progress: ProgressInfo) => void) {
        this.progressEventListeners.push(listener);
    }

    private callProgress() {
        const [num1, num2] = this.stepIds[this.currentStepIndex]?.split('.') || [];
        const currentStepIndex = this.currentStepIndex;
        let topic: string | undefined = undefined;

        if (currentStepIndex !== undefined) {
            const stepId = this.stepIds[currentStepIndex];
            if (stepId !== undefined) {
                topic = this.steps[stepId]?.[0]?.topic;
            }
        }

        let totalProgressSteps = 0;
        let activeProgressSteps = 0;
        for (let i = 0; i < this.stepIds.length; i++) {
            const stepId = this.stepIds[i];
            if (stepId === undefined) continue;

            const steps = this.steps[stepId];
            if (!Array.isArray(steps)) continue;

            steps.forEach((step) => {
                if (step.countTowardsProgress) {
                    if (i <= currentStepIndex) {
                        activeProgressSteps++;
                    }
                    totalProgressSteps++;
                }
            })
        }

        this.progressEventListeners.forEach((listener) => listener({
            progress: totalProgressSteps === 0 ? 0 : activeProgressSteps / totalProgressSteps,
            currentStepIndex,
            totalSteps: this.stepIds.length,
            currentStepId: num1,
            currentStepIdAddition: num2,
            topic
        }));
    }
}
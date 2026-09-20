"use client";

import { useState } from "react";
import clsx from "clsx";

type Task = {
  id: string;
  title: string;
};

const StepIds = ["todo", "wip", "done"] as const;

type StepId = (typeof StepIds)[number];

const stepColorMap: Record<StepId, string> = {
  todo: "primary",
  wip: "warning",
  done: "link",
};

interface StepContainerProps {
  id: StepId;
  name: string;
  tasks: Task[];
  onDrop: (fromStepId: StepId, toStepId: StepId, taskId: string) => void;
}

const DragTargetStepIdKey = "drag-step-id";
const DragTargetTaskIdKey = "drag-task-id";

const StepContainer = ({ id, name, tasks, onDrop }: StepContainerProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    task: Task,
  ) => {
    event.dataTransfer.setData(DragTargetStepIdKey, id);
    event.dataTransfer.setData(DragTargetTaskIdKey, task.id);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const stepId = event.dataTransfer.getData(DragTargetStepIdKey) as StepId;
    const taskId = event.dataTransfer.getData(DragTargetTaskIdKey);
    setIsDragOver(false);
    onDrop(stepId, id, taskId);
  };

  return (
    <div className={clsx("box", `has-background-${stepColorMap[id]}`)}>
      <div className="columns">
        <div className="column is-one-fifth">{name}</div>
        <div className="column">
          <div
            className={clsx(
              "p-2 flex gap-2 min-h-20",
              isDragOver ? "has-background-grey-light" : "has-background-white",
            )}
            onDragEnter={() => setIsDragOver(true)}
            onDragLeave={() => setIsDragOver(false)}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-2 has-background-grey-light w-20 h-20"
                draggable
                onDragStart={(e) => handleDragStart(e, task)}
              >
                {task.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type StepTask = {
  id: StepId;
  name: string;
  tasks: Task[];
};

const SampleStepTasks: StepTask[] = [
  {
    id: "todo",
    name: "着手待ち",
    tasks: [
      { id: "001", title: "コーディング" },
      { id: "002", title: "ミーティング" },
    ],
  },
  {
    id: "wip",
    name: "作業中",
    tasks: [],
  },
  {
    id: "done",
    name: "完了",
    tasks: [],
  },
];

export const Parts = () => {
  const [stepTasks, setStepTasks] = useState<StepTask[]>(SampleStepTasks);

  const handleOnDrop = (
    fromStepId: StepId,
    toStepId: StepId,
    taskId: string,
  ) => {
    setStepTasks((currentStepTasks) => {
      const targetStepTask = currentStepTasks.find(
        (stepTask) => stepTask.id === fromStepId,
      );
      const targetTask = targetStepTask?.tasks.find(
        (task) => task.id === taskId,
      );
      const newStepTasks = currentStepTasks.map((stepTask) => {
        if (stepTask.id === fromStepId) {
          const newTasks = stepTask.tasks.filter((task) => task.id !== taskId);
          return {
            ...stepTask,
            tasks: newTasks,
          };
        } else if (stepTask.id === toStepId) {
          return {
            ...stepTask,
            tasks: [
              ...stepTask.tasks,
              {
                id: taskId,
                title: targetTask?.title || "",
              },
            ],
          };
        } else {
          return stepTask;
        }
      });
      return newStepTasks;
    });
  };

  return (
    <div>
      {stepTasks.map((stepTask) => (
        <StepContainer
          key={stepTask.id}
          id={stepTask.id}
          name={stepTask.name}
          tasks={stepTask.tasks}
          onDrop={handleOnDrop}
        />
      ))}
    </div>
  );
};

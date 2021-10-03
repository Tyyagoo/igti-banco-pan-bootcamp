export type TodoItem = {
  title: string;
  description: string;
  done: boolean;
};

export const todoFactory = (
  title: string,
  description: string,
  done: boolean
): TodoItem => {
  return {
    title,
    description,
    done,
  };
};

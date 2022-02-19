
export class TaskService {

    public async getAllTasks(): Promise<any> {
        const response = await fetch('/api/tasks');
        return await response.json();
    }

    public async createTask(data: any): Promise<any> {
        
        const response = await fetch(`/api/task`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task: data})
        })
        return await response.json();
    }

    public async deleteTask(taskId: number): Promise<any> {
        const response = await fetch(`/api/task/${taskId}`, {method: 'DELETE'})
        return await response.json();
    }

    public async editTask(data: any): Promise<any> {
        const response = await fetch(`/api/task`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task: data})
        })
        return await response.json();
    }
}
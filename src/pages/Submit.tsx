import { useState } from 'react'

type FormState = {
  modelName: string
  precision: string
  revision: string
  email: string
}

type TaskFormState = {
  taskId: string
  name: string
  group: string
  url: string
  description: string
  email: string
}

export function Submit() {
  const [form, setForm] = useState<FormState>({ modelName: '', precision: '', revision: '', email: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [taskForm, setTaskForm] = useState<TaskFormState>({ taskId: '', name: '', group: '', url: '', description: '', email: '' })
  const [taskStatus, setTaskStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setTaskForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      // For now, just log. You can wire this to a backend/email later.
      console.log('Submission', form)
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      setForm({ modelName: '', precision: '', revision: '', email: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  async function handleTaskSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTaskStatus('submitting')
    try {
      console.log('Task submission', taskForm)
      await new Promise((r) => setTimeout(r, 600))
      setTaskStatus('success')
      setTaskForm({ taskId: '', name: '', group: '', url: '', description: '', email: '' })
    } catch (e) {
      setTaskStatus('error')
    }
  }

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-6">Suggest a Model</h1>
      <form onSubmit={handleSubmit} className="space-y-4 rounded border bg-card/60 p-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="modelName">Model name</label>
          <input id="modelName" name="modelName" required value={form.modelName} onChange={handleChange} className="w-full rounded border bg-background px-3 py-2" placeholder="org/model" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="precision">Precision</label>
          <input id="precision" name="precision" required value={form.precision} onChange={handleChange} className="w-full rounded border bg-background px-3 py-2" placeholder="e.g. bf16, fp8" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="revision">Revision commit</label>
          <input id="revision" name="revision" required value={form.revision} onChange={handleChange} className="w-full rounded border bg-background px-3 py-2" placeholder="commit SHA" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded border bg-background px-3 py-2" placeholder="you@example.com" />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={status==='submitting'} className="rounded btn-accent px-4 py-2 disabled:opacity-60">
            {status==='submitting' ? 'Submitting…' : 'Submit'}
          </button>
          {status==='success' && <span className="text-green-600 text-sm">Thanks! Well be in touch.</span>}
          {status==='error' && <span className="text-destructive text-sm">Something went wrong. Try again.</span>}
        </div>
      </form>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Suggest a Task/Dataset</h2>
      <form onSubmit={handleTaskSubmit} className="space-y-4 rounded border bg-card/60 p-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="taskId">Task key</label>
            <input id="taskId" name="taskId" required value={taskForm.taskId} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder="e.g. copa_es" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Task name</label>
            <input id="name" name="name" required value={taskForm.name} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder="COPA-ES" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="group">Category / Group</label>
            <select id="group" name="group" required value={taskForm.group} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2">
              <option value="">Select…</option>
              <option value="latam_es">Spanish (latam_es)</option>
              <option value="latam_pr">Portuguese (latam_pr)</option>
              <option value="latam_pr">Other (latam_pr)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="url">Dataset URL</label>
            <input id="url" name="url" required value={taskForm.url} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder="https://huggingface.co/datasets/..." />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="description">Short description</label>
          <textarea id="description" name="description" rows={3} value={taskForm.description} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder="What does this task evaluate?" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="taskEmail">Contact email</label>
          <input id="taskEmail" name="email" type="email" required value={taskForm.email} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder="you@example.com" />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={taskStatus==='submitting'} className="rounded btn-accent px-4 py-2 disabled:opacity-60">
            {taskStatus==='submitting' ? 'Submitting…' : 'Submit task'}
          </button>
          {taskStatus==='success' && <span className="text-green-600 text-sm">Thanks! Well review it.</span>}
          {taskStatus==='error' && <span className="text-destructive text-sm">Something went wrong. Try again.</span>}
        </div>
      </form>

      <div className="mt-8 text-sm text-muted-foreground">
        Not sure how to start? <a className="underline" href="mailto:contacto@surus.dev">Get in touch</a>.
      </div>
    </div>
  )
}





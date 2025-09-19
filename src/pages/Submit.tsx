import { useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'

type FormState = {
  modelName: string
  precision: string
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
  const { t } = useI18n()
  const [form, setForm] = useState<FormState>({ modelName: '', precision: '', email: '' })
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
      setForm({ modelName: '', precision: '', email: '' })
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
      <h1 className="text-3xl font-bold mb-6">{t('submit.suggest_model')}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 rounded border bg-card/60 p-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="modelName">{t('submit.model_name')}</label>
          <input id="modelName" name="modelName" required value={form.modelName} onChange={handleChange} className="w-full rounded border bg-background px-3 py-2" placeholder={t('submit.model_placeholder')} />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="precision">{t('submit.precision')}</label>
          <input id="precision" name="precision" required value={form.precision} onChange={handleChange} className="w-full rounded border bg-background px-3 py-2" placeholder={t('submit.precision_placeholder')} />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">{t('submit.email')}</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full rounded border bg-background px-3 py-2" placeholder={t('submit.email_placeholder')} />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={status==='submitting'} className="rounded btn-accent px-4 py-2 disabled:opacity-60">
            {status==='submitting' ? t('submit.submitting') : t('submit.submit')}
          </button>
          {status==='success' && <span className="text-green-600 text-sm">{t('submit.thanks_touch')}</span>}
          {status==='error' && <span className="text-destructive text-sm">{t('common.error_generic')}</span>}
        </div>
      </form>

      <h2 className="text-2xl font-semibold mt-10 mb-4">{t('submit.suggest_task')}</h2>
      <form onSubmit={handleTaskSubmit} className="space-y-4 rounded border bg-card/60 p-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="taskId">{t('submit.task_key')}</label>
            <input id="taskId" name="taskId" required value={taskForm.taskId} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder="e.g. copa_es" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="name">{t('submit.task_name')}</label>
            <input id="name" name="name" required value={taskForm.name} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder="COPA-ES" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="group">{t('submit.group')}</label>
            <select id="group" name="group" required value={taskForm.group} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2">
              <option value="">{t('submit.select')}</option>
              <option value="latam_es">{t('submit.spanish_group')}</option>
              <option value="latam_pr">{t('submit.portuguese_group')}</option>
              <option value="latam_ts">{t('submit.other_group')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="url">{t('submit.dataset_url')}</label>
            <input id="url" name="url" required value={taskForm.url} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder={t('submit.url_placeholder')} />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="description">{t('submit.short_desc')}</label>
          <textarea id="description" name="description" rows={3} value={taskForm.description} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder={t('submit.short_desc_placeholder')} />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="taskEmail">{t('submit.contact_email_label')}</label>
          <input id="taskEmail" name="email" type="email" required value={taskForm.email} onChange={handleTaskChange} className="w-full rounded border bg-background px-3 py-2" placeholder={t('submit.email_placeholder')} />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" disabled={taskStatus==='submitting'} className="rounded btn-accent px-4 py-2 disabled:opacity-60">
            {taskStatus==='submitting' ? t('submit.submitting') : t('submit.submit_task')}
          </button>
          {taskStatus==='success' && <span className="text-green-600 text-sm">{t('submit.thanks_review')}</span>}
          {taskStatus==='error' && <span className="text-destructive text-sm">{t('common.error_generic')}</span>}
        </div>
      </form>

      <div className="mt-8 text-sm text-muted-foreground">
        {t('submit.not_sure')} <a className="underline" href="mailto:contacto@surus.dev">{t('submit.get_in_touch')}</a>.
      </div>
    </div>
  )
}





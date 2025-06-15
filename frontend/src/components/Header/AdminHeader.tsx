import { AdminButton } from './AdminButton.tsx'
import { AccountButton } from './AccountButton.tsx'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../Global/LanguageSelector.tsx'
import { NewsButton } from './NewsButton.tsx'

export const AdminHeader = () => {
  const { t } = useTranslation()

  return (
    <div className='p-4 flex justify-between'>
      <div className='flex gap-4'>
        <AdminButton />
        <NewsButton location='/admin/articles' />
      </div>
      <h1 className='text-3xl'>{t('admin-dashboard')}</h1>
      <div className='flex gap-4'>
        <AccountButton location={'/admin/account'} />
        <LanguageSelector />
      </div>
    </div>
  )
}

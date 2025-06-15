import {t} from 'i18next'
import {ReactNode} from "react";

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    title: string
    children: ReactNode
}

export const Modal = ({isOpen, onClose, title, children}: ModalProps) => {
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
            <div className='bg-light-default dark:bg-dark-default rounded-lg shadow-xl w-full max-w-md mx-4'>
                <div className='flex justify-between items-center border-b px-6 py-4'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <button
                        onClick={onClose}
                        className='text-gray-500 hover:text-gray-700 focus:outline-none'
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                </div>
                <div className='p-6 space-y-4'>{children}</div>
                <div className='flex justify-end border-t px-6 py-4'>
                    <button
                        onClick={onClose}
                        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none'
                    >
                        {t('close')}
                    </button>
                </div>
            </div>
        </div>
    )
}

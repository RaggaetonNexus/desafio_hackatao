'use client';

import styles from './modal.module.css';
import { useState } from 'react';

export default function Modal({ children, submitText, onSubmit, onCancel, cancelable }: { children: React.ReactNode, submitText: string, onSubmit: () => void, onCancel: () => void, cancelable?: boolean }) {
  const [open, setOpen] = useState(true);
  return (<div id={styles.modalContainer} className={open ? styles.open : ''}>
      <dialog open id={styles.modalItem}>
        <button onClick={() => {setOpen(false); onCancel()}} id={styles.closeModalButton}>
          <div id={styles.closePart}></div>
          <div id={styles.closePart}></div>
        </button>
        {children}
        <form method="dialog" id={styles.inputAreas}>
          {cancelable && <button onClick={() => {setOpen(false); onCancel()}} className={styles.modalButton}>Cancel</button>}
          <button onClick={() => {setOpen(false); onSubmit()}} className={[styles.modalButton, styles.mainAction].join(' ')}>{submitText}</button>
        </form>
      </dialog>
  </div>)
}

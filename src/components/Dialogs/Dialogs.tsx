import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={`${s.dialog}  ${s.active}`}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Solan
                </div>
                <div className={s.dialog}>
                    Baklazan
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your day?</div>
                <div className={s.message}>Nice</div>
            </div>
        </div>


    );
};

export default Dialogs;
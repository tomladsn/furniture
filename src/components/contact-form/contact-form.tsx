import classNames from 'classnames';
import styles from './contact-form.module.scss';

export interface ContactFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ContactForm = ({ className }: ContactFormProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="/Rectangle 3.png" className={styles['contact-img']} />
            <div className={styles['contact-div']}>
                <p className={styles['contact-form-title']}>Neem contact met ons op</p>
                <p className={styles['belons-txt']}>Bel ons</p>
                <p className={styles['belons-subtxt']}>
                    We zijn van Ma tm Vr van 8:00 tot 18:00 ook telefonisch bereikbaar
                </p>
                <p className={styles['belons-number']}>+31 6 14118713</p>
                <p className={styles.Mailons}>Mail ons </p>
                <p className={styles['mail-address']}>Info@meubelsoettwente.nl</p>
                <p className={styles['waar-alles']}> Waar alles gebeurt</p>
                <p className={styles['sub-waar-alles']}>
                    VI InterieursHandelsweg 137461 JJ Rijssen
                </p>
                <div className={styles['contact-form']}>
                    <div className={styles['div-name-input']}>
                        <input className={styles['name-input']} placeholder="Name:*" />
                    </div>

                    <div className={styles['div-email-input']}>
                        <input className={styles['email-input']} placeholder="Email" />
                    </div>
                    <input className={styles.subject} placeholder="Subject" />
                    <textarea className={styles['message-input']} placeholder="Message" />
                    <button className={styles['submit-btn']}>
                        <p className={styles['submit-btn-txt']}>SEND MESSAGE</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

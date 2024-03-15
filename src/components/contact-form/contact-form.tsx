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
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles['contact-img']}
            />
            <div className={styles['contact-div']}>
                <p>This is a paragraph.</p>
                <div className={styles['contact-form']}>
                    <input />
                    <input />
                    <input />
                    <textarea />
                    <button>Button</button>
                </div>
            </div>
        </div>
    );
};

import { createBoard } from '@wixc3/react-board';
import { ContactForm } from '../../../components/contact-form/contact-form';

export default createBoard({
    name: 'ContactForm',
    Board: () => <ContactForm />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});

import { createBoard } from '@wixc3/react-board';
import { AboutAdKast } from '../../../components/about-ad-kast/about-ad-kast';

export default createBoard({
    name: 'AboutAdKast',
    Board: () => <AboutAdKast />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});

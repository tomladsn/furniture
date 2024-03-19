import { createBoard } from '@wixc3/react-board';
import { Configuratorpage } from '../../../components/pages/configurator/configuratorpage';

export default createBoard({
    name: 'Configuratorpage',
    Board: () => <Configuratorpage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});

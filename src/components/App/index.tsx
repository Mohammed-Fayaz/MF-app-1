import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// remote types
import ButtonType from '@mf-types/app2/_types/Button';
import TextType from '@mf-types/app2/_types/Text';

const queryClient = new QueryClient();

import Style from './style.module.scss';

const RemoteButton = React.lazy(
    () => import('app2/Button')
) as unknown as typeof ButtonType;

const RemoteText = React.lazy(
    () => import('app2/Text')
) as unknown as typeof TextType;

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className={Style['style']}>
                <div>Le App</div>
                <RemoteButton text={'yolo'} />
                <RemoteText prop={'prop'} />
            </div>
        </QueryClientProvider>
    );
};

export default React.memo(App);

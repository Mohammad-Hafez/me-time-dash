import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import CreateBusinessName from '../CreateBusinessName/CreateBusinessName';
import ChooseBusiness from '../ChooseBusiness/ChooseBusiness';
import SetBusinessInfo from '../SetBusinessInfo/SetBusinessInfo';

const CompleteRegistration = ({ t }) => {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: t('register.progress.BusinessName'),
            content: <CreateBusinessName t={t} next={next} />,
        },
        {
            title: t('register.progress.ChooseBusiness'),
            content: <ChooseBusiness t={t} next={next} prev={prev}/>,
        },
        {
            title: t('register.progress.BusinessInfo'),
            content: <SetBusinessInfo t={t} prev={prev} message={message} />,
        },
    ];
    
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return <>
        <Steps current={current} labelPlacement="vertical" items={items} />

        <div>{steps[current]?.content}</div>

        <div>
            {current === steps.length - 1 && (
                <Button  onClick={() => message.success('Processing complete!')}>
                    {t('buttons.done')}
                </Button>
            )}
            {/* {current > 0 && (
                <Button onClick={() => prev()} className='ms-3'>
                    {t('buttons.previous')}
                </Button>
            )} */}
        </div>
    </>
};
export default CompleteRegistration;
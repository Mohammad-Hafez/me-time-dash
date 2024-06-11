import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import CreateBusinessName from '../CreateBusinessName/CreateBusinessName';
import ChooseBusiness from '../ChooseBusiness/ChooseBusiness';
import SetBusinessInfo from '../SetBusinessInfo/SetBusinessInfo';
const CompleteRegistration = ({ t }) => {

    const steps = [
        {
            title: t('register.progress.BusinessName'),
            content: <CreateBusinessName/>,
        },
        {
            title: t('register.progress.ChooseBusiness'),
            content: <ChooseBusiness/>,
        },
        {
            title: t('register.progress.BusinessInfo'),
            content: <SetBusinessInfo/>,
        },
    ];
    

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return <>
        <Steps current={current} items={items} />

        <div>{steps[current].content}</div>

        <div>
            {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                    Next
                </Button>
            )}
            {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
            )}
            {current > 0 && (
                <Button onClick={() => prev()} className='ms-3'>
                    Previous
                </Button>
            )}
        </div>
    </>
};
export default CompleteRegistration;
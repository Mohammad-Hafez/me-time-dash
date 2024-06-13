import React, { useState } from 'react';
import styles from './ChooseBusiness.module.css';
import store from '../../Assets/images/store.svg';
import beauty from '../../Assets/images/beauty.svg';
import clinic from '../../Assets/images/clinic.svg';
import expert from '../../Assets/images/expert.svg';

const ChooseBusiness = ({ t , next , prev}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <>
            <section className={styles.chooseBusiness}>
                <h2 className="text-purple-900 font-semibold text-2xl text-center mb-4">
                    {t('register.choose.header')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-3">
                    <div
                        className={`bg-white shadow-md rounded-lg p-6 cursor-pointer transition-all ease-in-out ${selectedCard === 'beauty' ? 'border-4 border-purple-500' : ''}`}
                        onClick={() => handleCardClick('beauty')}
                    >
                        <img src={beauty} className="w-full h-auto object-contain mb-3" alt="beauty image" loading="lazy" />
                        <h3 className="font-semibold text-xs mb-1 text-purple-900 text-center">{t('register.choose.beautySalon')}</h3>
                    </div>
                    <div
                        className={`bg-white shadow-md rounded-lg p-6 cursor-pointer transition-all ease-in-out ${selectedCard === 'expert' ? 'border-4 border-purple-500' : ''}`}
                        onClick={() => handleCardClick('expert')}
                    >
                        <img src={expert} className="w-full h-auto object-contain mb-3" alt="expert image" loading="lazy" />
                        <h3 className="font-semibold text-xs mb-1 text-purple-900 text-center">{t('register.choose.expert')}</h3>
                    </div>
                    <div
                        className={`bg-white shadow-md rounded-lg p-6 cursor-pointer transition-all ease-in-out ${selectedCard === 'store' ? 'border-4 border-purple-500' : ''}`}
                        onClick={() => handleCardClick('store')}
                    >
                        <img src={store} className="w-full h-auto object-contain mb-3" alt="store image" loading="lazy" />
                        <h3 className="font-semibold text-xs mb-1 text-purple-900 text-center">{t('register.choose.store')}</h3>
                    </div>
                    <div
                        className={`bg-white shadow-md rounded-lg p-6 cursor-pointer transition-all ease-in-out ${selectedCard === 'clinic' ? 'border-4 border-purple-500' : ''}`}
                        onClick={() => handleCardClick('clinic')}
                    >
                        <img src={clinic} className="w-full h-auto object-contain mb-3" alt="clinic image" loading="lazy" />
                        <h3 className="font-semibold text-xs mb-1 text-purple-900 text-center">{t('register.choose.medicalCenter')}</h3>
                    </div>
                </div>
                <div className="text-end">
                <button 
                onClick={()=> next()}
                disabled={!selectedCard} 
                className='py-2 px-4 bg-purple-800 text-white rounded focus:ring-2 ring-purple-300 text-center hover:bg-purple-700 disabled:bg-purple-400 transition-all'>
                    {t('buttons.next')}
                </button>

                </div>
            </section>
        </>
    );
};

export default ChooseBusiness;

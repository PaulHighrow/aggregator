import { useState } from 'react';
import {
  FAQHeading,
  FAQList,
  FAQListAnswer,
  FAQListItem,
  FAQListQuestion,
  SupportBackground,
  SupportBox,
  SupportFAQBox,
  YTPSettings,
} from './Support.styled';

export const Support = ({
  isSupportOpen,
  isOpenedLast,
  sectionWidth,
  handleSupport,
}) => {
  const desktopWidth = sectionWidth / 3;
  const mobileWidth = (sectionWidth / 3) * 2;
  const [questionIds, setQuestionsIds] = useState([]);
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const showAnswer = e => {
    const dataId = e.currentTarget.getAttribute('data_id');
    questionIds.includes(dataId)
      ? setQuestionsIds(ids => (ids = [...ids].filter(id => id !== dataId)))
      : setQuestionsIds(ids => (ids = [...ids, dataId]));

    setIsAnswerShown(true);
    handleSupport(dataId);
  };

  const supportBoxStylesHandler = () => {
    return {
      zIndex: isOpenedLast === 'support' ? '4' : '1',
      width: sectionWidth > 1280 ? `${desktopWidth}px` : `${mobileWidth}px`,
    };
  };

  return (
    <>
      <SupportBox
        className={isSupportOpen ? 'shown' : 'hidden'}
        style={{ ...supportBoxStylesHandler() }}
      >
        <SupportBackground>
          <SupportFAQBox>
            <FAQHeading>Поширені запитання та прості відповіді</FAQHeading>
            <FAQList>
              <FAQListItem>
                <FAQListQuestion data_id="quality" onClick={showAnswer}>
                  Як включити максимальну якість відео?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('quality') && (
                  <FAQListAnswer>
                    У низу справа вікна (область підсвічено жовтим кольором для
                    зручності), ліворуч від кнопок повноекранного режиму та
                    перегляду на YouTube розташована кнопка <YTPSettings />,
                    натисніть на неї, в меню що відкриється, знайдіть пункт
                    "Якість", натисніть на нього та оберіть найвищу якість відео
                    (1080p)
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="sound" onClick={showAnswer}>
                  Як включити звук?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('sound') && (
                  <FAQListAnswer>
                    У низу зліва екрану є штука 🔊, якщо вона перекреслена, то
                    біда, от на неї клац, і буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="chat_login" onClick={showAnswer}>
                  Чому я не можу писати в чаті?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('chat_login') && (
                  <FAQListAnswer>
                    Ютуб просить, щоб авторизувалися там і канал створили там,
                    бо ноунеймів не любить, тому треба все це зробити, а потім у
                    чаті писати буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="chat_open" onClick={showAnswer}>
                  Як відкрити чат?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('chat_open') && (
                  <FAQListAnswer>
                    Он там зліва зверху кнопка 🗨 є, її клац і буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="kahoot_open" onClick={showAnswer}>
                  Як відкрити Кахут?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('kahoot_open') && (
                  <FAQListAnswer>
                    Он там зліва зверху кнопка K! є, її клац і буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="kahoot_login" onClick={showAnswer}>
                  Як зайти на Кахут?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('kahoot_login') && (
                  <FAQListAnswer>
                    Он там на екрані код кахуту є, його в поле Game PIN у вікні
                    Кахуту, потім своє ім'я (повне, будь ласка, від цього ваші
                    бали залежать) і буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion
                  data_id="kahoot_fullscreen"
                  onClick={showAnswer}
                >
                  Як відкрити Кахут на весь екран?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('kahoot_fullscreen') && (
                  <FAQListAnswer>
                    Он там у вікні Кахуту справа зверху є кнопка типу 💢, от її
                    клац і буде взагалі добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="live" onClick={showAnswer}>
                  Моя трансляція дуже сильно відстає, що робити?
                </FAQListQuestion>
                {isAnswerShown && questionIds.includes('live') && (
                  <FAQListAnswer>
                    Знизу зліва вікна (область підсвічено жовтим кольором для
                    зручності), праворуч від кнопок паузи та налаштувань
                    гучності розташована кнопка "• У прямому ефірі". Натисніть
                    її, щоб наздогнати трансляцію!
                  </FAQListAnswer>
                )}
              </FAQListItem>
            </FAQList>
          </SupportFAQBox>
        </SupportBackground>
      </SupportBox>
    </>
  );
};

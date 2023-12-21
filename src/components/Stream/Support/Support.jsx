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
} from './Support.styled';

export const Support = ({
  isSupportOpen,
  isOpenedLast,
  sectionWidth,
  handleSupport,
}) => {
  const desktopWidth = sectionWidth / 4;
  const mobileWidth = (sectionWidth / 3) * 2;
  const [id, setId] = useState([]);
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const hideAnswer = id => (isAnswerShown ? setIsAnswerShown(false) : null);
  const showAnswer = e => {
    const dataId = e.currentTarget.getAttribute('data_id');
    console.log(id);
    hideAnswer(id);
    id.includes(dataId)
      ? setId(id => (id = [...id].splice([...id].indexOf(dataId), 1)))
      : setId(id => (id = [...id, dataId]));

    setIsAnswerShown(true);
    handleSupport();
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
                {isAnswerShown && id.includes('quality') && (
                  <FAQListAnswer>
                    У низу справа екрану є штука ⚙, от на неї клац, там Якість і
                    буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="sound" onClick={showAnswer}>
                  Як включити звук?
                </FAQListQuestion>
                {isAnswerShown && id.includes('sound') && (
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
                {isAnswerShown && id.includes('chat_login') && (
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
                {isAnswerShown && id.includes('chat_open') && (
                  <FAQListAnswer>
                    Он там зліва зверху кнопка 🗨 є, її клац і буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="kahoot_open" onClick={showAnswer}>
                  Як відкрити Кахут?
                </FAQListQuestion>
                {isAnswerShown && id.includes('kahoot_open') && (
                  <FAQListAnswer>
                    Он там зліва зверху кнопка K! є, її клац і буде добре
                  </FAQListAnswer>
                )}
              </FAQListItem>
              <FAQListItem>
                <FAQListQuestion data_id="kahoot_login" onClick={showAnswer}>
                  Як зайти на Кахут?
                </FAQListQuestion>
                {isAnswerShown && id.includes('kahoot_login') && (
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
                {isAnswerShown && id.includes('kahoot_fullscreen') && (
                  <FAQListAnswer>
                    Он там у вікні Кахуту справа зверху є кнопка типу 💢, от її
                    клац і буде взагалі добре
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

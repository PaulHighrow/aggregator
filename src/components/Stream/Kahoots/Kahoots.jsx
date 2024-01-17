import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import {
  SupportClipBoardAdd,
  SupportClipBoardCopy,
  SupportKahootPickerIcon,
} from '../Support/Support.styled';
import {
  ClipBoardAdd,
  ClipBoardBtn,
  ClipBoardCopy,
  ClipBoardFormDismissBtn,
  ClipBoardFormText,
  ClipBoardInput,
  ClipBoardInputForm,
  ClipBoardNotification,
  ClipBoardSubmitBtn,
  DismissIcon,
  KahootBackground,
  KahootBox,
  KahootDisclaimerBackground,
  KahootDisclaimerBox,
  KahootDisclaimerItem,
  KahootDisclaimerList,
  KahootDisclaimerText,
  KahootExitFullScreenIcon,
  KahootFullScreenBtn,
  KahootFullScreenIcon,
  KahootNumbersBtn,
  KahootNumbersHider,
  KahootPicker,
  KahootPickerBtn,
} from './Kahoots.styled';

export const Kahoots = ({
  sectionWidth,
  sectionHeight,
  isKahootOpen,
  isChatOpen,
  isOpenedLast,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(true);
  const [username, setUsername] = useState(
    localStorage.getItem('userName') || ''
  );
  const [kahoots, setKahoots] = useState({});
  const [activeKahoot, setActiveKahoot] = useState(0);

  let location = useLocation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

  const trialsSwitch = path => {
    switch (path) {
      case 'pilot':
        return 'deutsch';
      case 'test1':
        return 'test';
      case 'trial-en':
        return 'trials';
      case 'trial-de':
        return 'trials_de';
      case 'trial-pl':
        return 'trials_pl';
      case 'trial-kids':
        return 'trials_kids';
      default:
        break;
    }
  };

  const page = location.pathname.includes('streams-kids')
    ? location.pathname.match(/\/([^/]+)\/?$/)[1] + 'kids'
    : location.pathname.includes('trial') ||
      location.pathname.includes('pilot') ||
      location.pathname.includes('test1')
    ? trialsSwitch(location.pathname.match(/\/([^/]+)\/?$/)[1])
    : location.pathname.match(/\/([^/]+)\/?$/)[1];

  const kahootWidth = isFullScreen ? sectionWidth : (sectionWidth / 10) * 4;

  const getLinksForLocation = () => {
    const entries = [];
    Object.values(kahoots[page].links).map(entry => {
      entries.push(entry);
      return entries;
    });
    return entries;
  };

  const kahootLinksRefresher = async e => {
    if (e.target === e.currentTarget) {
      setKahoots((await axios.get('/kahoots')).data);
    }
  };

  const setKahootNumber = async e => {
    const kahootNumber = parseInt(e.currentTarget.innerText);
    setKahoots((await axios.get('/kahoots')).data);
    setActiveKahoot(kahootNumber);
  };

  useLayoutEffect(() => {
    const getLinksRequest = async () => {
      try {
        setKahoots((await axios.get('/kahoots')).data);
      } catch (error) {
        console.log(error);
      }
    };

    getLinksRequest();
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(isFullScreen => (isFullScreen = !isFullScreen));
  };

  const toggleKahootPicker = () => {
    setIsAnimated(false);
    setIsPickerOpen(isOpen => (isOpen = !isOpen));
    setActiveKahoot(1);
  };

  const createNameInput = btn => {
    btn.disabled = true;
    toast(
      t => (
        <ClipBoardInputForm
          onSubmit={e => {
            e.preventDefault();
            toast.dismiss(t.id);
            setUsername(
              username => (username = localStorage.getItem('userName'))
            );
            btn.disabled = false;
            if (localStorage.getItem('userName')) {
              copyToClipboard(btn);
            }
          }}
        >
          <ClipBoardFormDismissBtn onClick={() => toast.dismiss(t.id)}>
            <DismissIcon />
          </ClipBoardFormDismissBtn>
          <ClipBoardFormText>
            Введіть ваше ім'я в це поле, щоб вам не доводилося вводити його
            декілька разів під час уроку. Будь ласка, вводьте повне ім'я без
            скорочень, щоб ми могли правильно зарахувати ваші бали!
          </ClipBoardFormText>
          <ClipBoardInput
            placeholder="Ім'я"
            onChange={e => {
              localStorage.setItem('userName', e.target.value);
            }}
          />
          <ClipBoardSubmitBtn>Зберегти</ClipBoardSubmitBtn>
        </ClipBoardInputForm>
      ),
      { duration: Infinity }
    );
  };

  const copyToClipboard = btn => {
    navigator.clipboard.writeText(localStorage.getItem('userName'));
    toast.success(
      t => (
        <ClipBoardNotification>
          <ClipBoardFormText>
            <ClipBoardFormDismissBtn onClick={() => toast.dismiss(t.id)}>
              <DismissIcon />
            </ClipBoardFormDismissBtn>
            {`${localStorage.getItem('userName')}`}, ваше ім'я додано в буфер
            обміну, можете вставити його у відповідне поле!
          </ClipBoardFormText>

          <ClipBoardFormText>
            Випадково помилились? Натисніть на цю кнопку:{' '}
            <ClipBoardSubmitBtn
              onClick={() => {
                toast.dismiss(t.id);
                createNameInput(btn);
              }}
            >
              Виправити
            </ClipBoardSubmitBtn>
          </ClipBoardFormText>
        </ClipBoardNotification>
      ),
      { duration: 3000 }
    );
  };

  const handleUsernameBtn = e => {
    const btn = e.currentTarget;
    username ? copyToClipboard(btn) : createNameInput(btn);
  };

  return (
    <>
      {Object.keys(kahoots).length && (
        <KahootBox
          ref={ref}
          width={isChatOpen ? kahootWidth - 300 : kahootWidth}
          height={sectionHeight}
          className={isKahootOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'kahoot' ? { zIndex: '3' } : { zIndex: '1' }}
          onTransitionEnd={kahootLinksRefresher}
        >
          <KahootNumbersHider
            onClick={toggleKahootPicker}
            className={inView && isAnimated ? 'animated' : ''}
            tabIndex={-1}
          >
            <KahootPickerBtn />
          </KahootNumbersHider>
          <KahootPicker className={isPickerOpen ? 'shown' : 'hidden'}>
            {Object.values(kahoots[page].links).map((link, i) => (
              <KahootNumbersBtn
                key={i}
                onClick={setKahootNumber}
                className={activeKahoot === i + 1 ? 'active' : ''}
                tabIndex={-1}
              >
                {i + 1}
              </KahootNumbersBtn>
            ))}
          </KahootPicker>
          {activeKahoot ? (
            getLinksForLocation().map(
              (link, i) =>
                activeKahoot === i + 1 && (
                  <KahootBackground key={i}>
                    <iframe
                      id="kahoot-window"
                      title="kahoot-pin"
                      src={link}
                      width={
                        !isChatOpen
                          ? kahootWidth
                          : isFullScreen
                          ? kahootWidth - 300
                          : kahootWidth
                      }
                      height={sectionHeight}
                    ></iframe>
                    <KahootFullScreenBtn onClick={toggleFullScreen}>
                      {isFullScreen ? (
                        <KahootExitFullScreenIcon />
                      ) : (
                        <KahootFullScreenIcon />
                      )}
                    </KahootFullScreenBtn>
                    <ClipBoardBtn onClick={handleUsernameBtn}>
                      {username ? <ClipBoardCopy /> : <ClipBoardAdd />}
                    </ClipBoardBtn>
                  </KahootBackground>
                )
            )
          ) : (
            <KahootDisclaimerBackground
              style={
                !isChatOpen
                  ? { width: `${kahootWidth}px` }
                  : isFullScreen
                  ? { width: `${kahootWidth - 300}px` }
                  : { width: `${kahootWidth}px` }
              }
            >
              <KahootDisclaimerBox>
                <KahootDisclaimerText>
                  Привіт! Це вікно Кахутів. Ми постійно працюємо над розширенням
                  функціоналу нашого сайту, щоб ваші заняття залишалися для вас
                  приємним досвідом, тому внесли декілька важливих змін:
                </KahootDisclaimerText>
                <KahootDisclaimerList>
                  <KahootDisclaimerItem>
                    <KahootDisclaimerText>
                      Вводити код Кахуту тепер не потрібно, адже ми вже ввели
                      його за вас. Просто тисніть кнопку{' '}
                      <SupportKahootPickerIcon /> у правому верхньому кутку
                      цього вікна і обирайте номер Кахуту. Почніть з першого. 😉
                    </KahootDisclaimerText>
                  </KahootDisclaimerItem>
                  <KahootDisclaimerItem>
                    <KahootDisclaimerText>
                      Ім'я вводити кожного разу тепер теж не обов'язково.
                      Тисніть кнопку <SupportClipBoardAdd /> та вводьте в
                      невеличке віконце ваше ім'я (не забувайте про наші
                      рекомендації). Ви можете вводити своє ім'я повністю
                      (наприклад: Володимир Зеленський), Кахут обріже зайві
                      літери автоматично (вийде: Володимир Зелен). Коли введете,
                      клікніть кнопку "Зберегти" і ваше ім'я збережеться у буфер
                      обміну, а кнопка буде виглядати так:{' '}
                      <SupportClipBoardCopy />.
                    </KahootDisclaimerText>
                  </KahootDisclaimerItem>{' '}
                  <KahootDisclaimerItem>
                    <KahootDisclaimerText>
                      Тепер при кліку на цю кнопку ви зможете швидко копіювати
                      своє ім'я і просто вставляти його у поле Кахуту. Якщо ви
                      припустилися помилки, вводячи своє ім'я, ви можете в
                      будь-який момент натиснути кнопку <SupportClipBoardCopy />
                      , а у віконці, що відкриється, кнопку "Виправити", після
                      чого введіть ім'я заново.
                    </KahootDisclaimerText>
                  </KahootDisclaimerItem>
                </KahootDisclaimerList>
              </KahootDisclaimerBox>
              <KahootFullScreenBtn onClick={toggleFullScreen} tabIndex={-1}>
                {isFullScreen ? (
                  <KahootExitFullScreenIcon />
                ) : (
                  <KahootFullScreenIcon />
                )}
              </KahootFullScreenBtn>
              <ClipBoardBtn tabIndex={-1} onClick={e => handleUsernameBtn(e)}>
                {username ? <ClipBoardCopy /> : <ClipBoardAdd />}
              </ClipBoardBtn>
            </KahootDisclaimerBackground>
          )}
        </KahootBox>
      )}
    </>
  );
};

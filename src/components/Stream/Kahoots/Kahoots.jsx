import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import {
  SupportClipBoardAdd,
  SupportClipBoardCopy,
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
} from './Kahoots.styled';

export const Kahoots = ({
  sectionWidth,
  sectionHeight,
  isKahootOpen,
  isOpenedLast,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem('userName') || ''
  );
  const [kahoots, setKahoots] = useState({});
  const [activeKahoot, setActiveKahoot] = useState(0);

  let location = useLocation();

  const trialsSwitch = path => {
    switch (path) {
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
    : location.pathname.includes('trial')
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
    setIsPickerOpen(isOpen => (isOpen = !isOpen));
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
          width={kahootWidth}
          height={sectionHeight}
          className={isKahootOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'kahoot' ? { zIndex: '3' } : { zIndex: '1' }}
          onTransitionEnd={kahootLinksRefresher}
        >
          <KahootNumbersHider onClick={toggleKahootPicker}>
            #
          </KahootNumbersHider>

          <KahootPicker className={isPickerOpen ? 'shown' : 'hidden'}>
            {Object.values(kahoots[page].links).map((link, i) => (
              <KahootNumbersBtn
                key={i}
                onClick={setKahootNumber}
                className={activeKahoot === i + 1 ? 'active' : ''}
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
                      width={kahootWidth}
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
            <KahootDisclaimerBackground style={{ width: `${kahootWidth}px` }}>
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
                      його за вас. Просто тисніть кнопку з решіткою # у правому
                      верхньому кутку цього вікна і обирайте номер Кахуту.
                      Почніть з першого. 😉
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
                      припустилися помилки, вводячи своє ім'я, ви в будь-який
                      момент натиснути кнопку <SupportClipBoardCopy />, у
                      віконці, що відкриється, натисніть "Виправити" та введіть
                      ім'я заново.
                    </KahootDisclaimerText>
                  </KahootDisclaimerItem>
                </KahootDisclaimerList>
              </KahootDisclaimerBox>
              <KahootFullScreenBtn onClick={toggleFullScreen}>
                {isFullScreen ? (
                  <KahootExitFullScreenIcon />
                ) : (
                  <KahootFullScreenIcon />
                )}
              </KahootFullScreenBtn>
              <ClipBoardBtn onClick={e => handleUsernameBtn(e)}>
                {username ? <ClipBoardCopy /> : <ClipBoardAdd />}
              </ClipBoardBtn>
            </KahootDisclaimerBackground>
          )}
        </KahootBox>
      )}
    </>
  );
};

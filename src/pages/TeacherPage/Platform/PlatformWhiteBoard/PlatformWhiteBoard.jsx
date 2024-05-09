import { PlatformWhiteBoardBox } from './PlatformWhiteBoard.styled';

export const PlatformWhiteBoard = ({
  page,
  isPlatformWhiteBoardOpen,
}) => {

  const BOARDS = {
    a0: 'https://onlineboard.eu/b/DvGmjap6',
    a1: 'https://wbo.ophir.dev/boards/i8c4m8cMJhPjy-dWWrMDFLtvhUgmWyM0i77LB19sHmw',
    a2: 'http://go.limnu.com/sealion-nasty',
    b1: 'http://go.limnu.com/marker-powerless',
    b2: 'http://go.limnu.com/skunk-outraged',
    a1kids: 'http://go.limnu.com/saucer-nutritious',
    a2kids: 'http://go.limnu.com/tulip-hollow',
    b1kids: 'http://go.limnu.com/boxwood-flexible',
    b2kids: 'http://go.limnu.com/rattlesnake-naughty',
    b1kidsbeginner: 'http://go.limnu.com/goatsbeard-naked',
    test: 'https://limnu.com/d/draw.html?b=B_N65K69RyegUKa5&',
    deutsch: 'http://go.limnu.com/cobra-potent',
    deutscha2: 'http://go.limnu.com/woodruff-dreamy',
    polski: 'http://go.limnu.com/hippogryph-pouched',
    polskia2: 'http://go.limnu.com/emu-meek',
    trials: 'http://go.limnu.com/hare-patchy',
    trials_kids: 'http://go.limnu.com/pine-brisk',
    trials_pl: 'http://go.limnu.com/cherry-arcane',
    trials_de: 'http://go.limnu.com/blimp-numb',
  };

  return (
    <>
      <PlatformWhiteBoardBox
        className={isPlatformWhiteBoardOpen ? 'shown' : 'hidden'}
      >
        <iframe
          id="whiteboard window"
          title="whiteboard-pin"
          // src="https://wbo.ophir.dev/boards/i8c4m8cMJhPjy-dWWrMDFLtvhUgmWyM0i77LB19sHmw-"
          src={BOARDS[page]}
          width="100%"
          height="100%"
        ></iframe>
      </PlatformWhiteBoardBox>
    </>
  );
};

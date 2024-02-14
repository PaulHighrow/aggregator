import styled from 'styled-components';

export const KeyboardBox = styled.div`

scrollbar-width: thin;
scrollbar-gutter: stable;

background-color: white;
position: absolute;
border-radius: 20px;
bottom: 0;
right: 0;
left: 0;

font-family: var(--streams-font-family);

transition: transform var(--animation-global);

&.hidden {
  transform: translateY(100%);
}

&.shown {
  transform: translateY(0);
}`
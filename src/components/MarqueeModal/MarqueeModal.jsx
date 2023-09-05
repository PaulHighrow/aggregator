export const MarqueeModal = ({ closeModal }) => {
  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      <Backdrop onClick={closeModal} />
      <div style={{ width: '100px', height: '100px' }}>Хуйня</div>
    </>
  );
};

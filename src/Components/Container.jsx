const Container = ({ children }) => (
  <div
    style={{
      border: '1px solid',
      margin: '-8px',
      boxSizing: 'border-box',
      height: '100vh',
      padding: '0px',
      width: '100vw',
    }}
  >
    {children}
  </div>
);

export default Container;

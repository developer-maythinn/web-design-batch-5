export const Nav = ({ bgColor }) => {
  return (
    <>
      <h1 style={{ background: bgColor }}>Nav Component</h1>
    </>
  );
};

function Header(props) {
  // console.log(props.text);
  const { text, color } = props;
  return (
    <>
      <h1 style={{ background: color }}>{text}</h1>
      <Nav bgColor={color} />
    </>
  );
}

export default Header;

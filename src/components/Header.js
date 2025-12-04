function Header({ name, image }) {
  return (
    <header>
      <h1>{name}</h1>
      <img src={image} alt={name} />
    </header>
  );
}

export default Header;

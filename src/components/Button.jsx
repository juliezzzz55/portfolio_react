function Button({ children, onClick, href }) {
  const style = {
    padding: '10px 24px',
    background: '#7c6af5',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    textDecoration: 'none',
    display: 'inline-block',
  }

  if (href) {
    return <a href={href} style={style}>{children}</a>
  }

  return <button onClick={onClick} style={style}>{children}</button>
}

export default Button

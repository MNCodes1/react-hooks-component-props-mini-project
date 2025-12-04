function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffee = "☕️".repeat(Math.ceil(minutes / 5));
  const bento = "🍱".repeat(Math.ceil(minutes / 10));
  const emojis = minutes < 30 ? coffee : bento;

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {minutes} min read {emojis}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

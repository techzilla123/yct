function Message() {
  const name = "Monsur";
  if (name)
    return (
      <h1 className="helloM">
        Hello {name}
      </h1>
    );
  return <h1>Hello World</h1>;
}
export default Message;

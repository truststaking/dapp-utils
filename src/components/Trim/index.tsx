import * as React from "react";
import useDebounce from "helpers/useDebounce";

const Trim = ({
  text,
  dataTestId = "",
}: {
  text: string;
  dataTestId?: string;
}) => {
  const [debounce, setDebounce] = React.useState(0);

  const [overflow, setOverflow] = React.useState(false);
  const trimRef = React.useRef(document.createElement("span"));
  const hiddenTextRef = React.useRef(document.createElement("span"));

  const debounceTracker = useDebounce(debounce, 100);

  const listener = () => {
    setDebounce(debounce + 1);
  };

  const effect = () => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(effect, [debounce]);

  React.useEffect(() => {
    if (trimRef.current && hiddenTextRef.current) {
      const diff =
        hiddenTextRef.current.offsetWidth - trimRef.current.offsetWidth;
      setOverflow(diff > 1);
    }
  }, [debounceTracker]);

  return (
    <span
      ref={trimRef}
      className={`trim ${overflow ? "overflow" : ""}`}
      data-testid={dataTestId}
    >
      <span ref={hiddenTextRef} className="hidden-text-ref">
        {text}
      </span>

      {overflow ? (
        <React.Fragment>
          <span className="left">
            <span>
              {String(text).substring(0, Math.floor(text.length / 2))}
            </span>
          </span>
          <span className="ellipsis">...</span>
          <span className="right">
            <span>{String(text).substring(Math.ceil(text.length / 2))}</span>
          </span>
        </React.Fragment>
      ) : (
        <span>{text}</span>
      )}
    </span>
  );
};

export default Trim;

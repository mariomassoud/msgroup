import useInView from "../hooks/useInView";

export default function Reveal({ as, delay = 0, className = "", children, ...rest }) {
  const Tag = as || "div";
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

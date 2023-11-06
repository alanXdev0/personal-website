interface LinkInterface {
  url: string;
  title: string;
}

export default function Link({ url, title }: LinkInterface) {
  const linkClasses: string =
    "font-medium text-slate-200 hover:text-sky-400 focus-visible:text-sky-400";
  return (
    <a
      className={linkClasses}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {title}
    </a>
  );
}

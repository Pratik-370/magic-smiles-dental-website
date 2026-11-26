import './common.css';

interface SectionHeadingProps {
  id?: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export function SectionHeading({
  id,
  title,
  eyebrow,
  subtitle,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const classes = [
    'section-heading',
    align === 'center' ? 'section-heading--center' : '',
    tone === 'dark' ? 'section-heading--on-dark' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  );
}

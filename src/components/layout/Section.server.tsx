import {relative} from 'path';
import {CSSProperties, ReactNode, RefObject} from 'react';

type Props = {
  maxWidth?: number | 'none';
  children?: ReactNode | ReactNode[];
  className?: string;
  outerClassName?: string;
  backgroundImage?: string;
  overlays?: {className: string}[];
  backgroundColor?: string;
  innerRef?: RefObject<HTMLDivElement>;
  backgroundPosition?: string;
  style?: CSSProperties;
  backgroundPriority?: boolean;
};
const Section = (props: Props) => {
  return (
    <section
      style={props.style}
      className={`${
        props.outerClassName || ''
      } px-4 md:px-6 lg:px-8 flex items-center justify-center bg-cover bg-center relative`}
    >
      {props.backgroundImage && (
        <img
          src={props.backgroundImage}
          className="absolute inset-0 object-cover object-center h-full w-full"
        />
      )}
      {props.overlays &&
        props.overlays.map((item) => {
          return (
            <div
              className={`${item.className} absolute inset-0`}
              key={item.className}
            ></div>
          );
        })}
      <div
        className={`${
          props.className || ''
        } mx-auto w-full max-w-[1501px] relative z-10`}
        style={props.maxWidth ? {maxWidth: props.maxWidth} : undefined}
        ref={props.innerRef}
      >
        {props.children || <></>}
      </div>
    </section>
  );
};
export default Section;

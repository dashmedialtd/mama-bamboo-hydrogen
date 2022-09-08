import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from '@shopify/hydrogen';

type Props = {
  label: string;
  link: string;
  alignment?: 'left' | 'center' | 'right';
};
const LightGreenButton = (props: Props) => {
  let alignmentUndef = props.alignment || 'left';

  const alignments: Record<typeof alignmentUndef, string> = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <Link
      to={props.link}
      className={`${alignments[alignmentUndef]} bg-light text-main font-semibold p-3 rounded-lg flex w-max items-center transition-all hover:bg-main hover:text-light`}
    >
      <span className="w-max flex-shrink-0">{props.label}</span>
      <div className="flex-shrink-0 max-w-[1rem] inline-block w-4 ml-2">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-base flex-shrink-0 inline"
        />
      </div>
    </Link>
  );
};
export default LightGreenButton;

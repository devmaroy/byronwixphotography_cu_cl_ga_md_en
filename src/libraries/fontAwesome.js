/* eslint-disable object-curly-newline */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faChevronUp,
  faMapMarkerAlt,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import {
  faCameraAlt,
  faCameraMovie,
  faUsers,
  faQuestionCircle,
} from '@fortawesome/pro-light-svg-icons';

// Create Font Awesome Icons Library
export default library.add(
  fab,
  faEnvelope,
  faChevronUp,
  faAddressBook,
  faMapMarkerAlt,
  faAngleDoubleLeft,
  faCameraAlt,
  faCameraMovie,
  faUsers,
  faQuestionCircle,
);

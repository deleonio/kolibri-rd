import { KoliBri } from '@public-ui/schema';
import accordionCss from './components/accordion.scss';
import alertCss from './components/alert.scss';
import badgeCss from './components/badge.scss';
import breadcrumbCss from './components/breadcrumb.scss';
import buttonCss from './components/button.scss';
import buttonGroupCss from './components/button-group.scss';
import buttonLinkCss from './components/button-link.scss';
import cardCss from './components/card.scss';
import detailsCss from './components/details.scss';
import globalCss from './global.scss';
import headingCss from './components/heading.scss';
import indentedTextCss from './components/indented-text.scss';
import inputCheckboxCss from './components/input-checkbox.scss';
import inputColorCss from './components/input-color.scss';
import inputDateCss from './components/input-date.scss';
import inputEmailCss from './components/input-email.scss';
import inputFileCss from './components/input-file.scss';
import inputNumberCss from './components/input-number.scss';
import inputPasswordCss from './components/input-password.scss';
import inputRadioCss from './components/input-radio.scss';
import inputRangeCss from './components/input-range.scss';
import inputTextCss from './components/input-text.scss';
import linkButtonCss from './components/link-button.scss';
import linkCss from './components/link.scss';
import linkGroupCss from './components/link-group.scss';
import modalCss from './components/modal.scss';
import navCss from './components/nav.scss';
import paginationCss from './components/pagination.scss';
import progressCss from './components/progress.scss';
import selectCss from './components/select.scss';
import skipNavCss from './components/skip-nav.scss';
import spinCss from './components/spin.scss';
import tableCss from './components/table.scss';
import tabsCss from './components/tabs.scss';
import textareaCss from './components/textarea.scss';
import toastContainerCss from './components/toast-container.scss';

// Bundeszentralamt für Steuern
export const RD = KoliBri.createTheme('rd', {
	GLOBAL: globalCss,
	'KOL-ACCORDION': accordionCss,
	'KOL-ALERT': alertCss,
	'KOL-BADGE': badgeCss,
	'KOL-BREADCRUMB': breadcrumbCss,
	'KOL-BUTTON': buttonCss,
	'KOL-BUTTON-GROUP': buttonGroupCss,
	'KOL-BUTTON-LINK': buttonLinkCss,
	'KOL-CARD': cardCss,
	'KOL-DETAILS': detailsCss,
	'KOL-HEADING': headingCss,
	'KOL-INDENTED-TEXT': indentedTextCss,
	'KOL-INPUT-CHECKBOX': inputCheckboxCss,
	'KOL-INPUT-COLOR': inputColorCss,
	'KOL-INPUT-DATE': inputDateCss,
	'KOL-INPUT-EMAIL': inputEmailCss,
	'KOL-INPUT-FILE': inputFileCss,
	'KOL-INPUT-NUMBER': inputNumberCss,
	'KOL-INPUT-PASSWORD': inputPasswordCss,
	'KOL-INPUT-RADIO': inputRadioCss,
	'KOL-INPUT-RANGE': inputRangeCss,
	'KOL-INPUT-TEXT': inputTextCss,
	'KOL-LINK': linkCss,
	'KOL-LINK-BUTTON': linkButtonCss,
	'KOL-LINK-GROUP': linkGroupCss,
	'KOL-MODAL': modalCss,
	'KOL-NAV': navCss,
	'KOL-PAGINATION': paginationCss,
	'KOL-PROGRESS': progressCss,
	'KOL-SELECT': selectCss,
	'KOL-SKIP-NAV': skipNavCss,
	'KOL-SPIN': spinCss,
	'KOL-TABLE': tableCss,
	'KOL-TABS': tabsCss,
	'KOL-TEXTAREA': textareaCss,
	'KOL-TOAST-CONTAINER': toastContainerCss,
});

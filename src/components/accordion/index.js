import Fraccordion from 'fr-accordion'

const accordion = Fraccordion({
	// String - Use header id on element to tie each accordion panel to its header - see panelIdPrefix
	headerIdPrefix: 'accordion-header',
	// String - Use panel id on element to tie each accordion header to its panel - see headerIdPrefix
	panelIdPrefix: 'accordion-panel',
	// Boolean - If set to false, all accordion panels will be closed on init()
	firstPanelsOpenByDefault: false,
	// Boolean - If set to false, each accordion instance will only allow a single panel to be open at a time
	multiselectable: true,
	// String - Class name that will be added to the selector when the component has been initialised
	readyClass: 'fr-accordion--is-ready'
})

export default { accordion, Fraccordion }

// Apertura di accordion specifici individuati con la classe 'accordion-open'
var fields = document.getElementsByClassName('accordion-open')
for (var i = 0; i < fields.length; i ++) {
	fields[i].setAttribute('aria-selected','true')
	fields[i].setAttribute('aria-expanded','true')
	var idHeader = fields[i].getAttribute('id')
	var idPanel = 'accordion-panel' + idHeader.replace('accordion-header','')
	document.getElementById(idPanel).setAttribute('aria-hidden','false')
	document.getElementById(idPanel).setAttribute('style','')
}
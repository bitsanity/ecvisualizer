var STRINGS = {};
var LANG = "English";

var LABELS = (function() {
  'use strict';

  function setLabels()
  {
    $( "#CurveLabel").html( STRINGS[LANG].CurveLabel );
    $( "#BasicAdvancedLabel" ).html( STRINGS[LANG].BasicAdvancedLabel )
    $( "#BasicChoiceLabel" ).html( STRINGS[LANG].BasicChoiceLabel )
    $( "#AdvancedChoiceLabel" ).html( STRINGS[LANG].AdvancedChoiceLabel )
    $( "#PKEncodingLabel").html( STRINGS[LANG].PKEncodingLabel )
    $( "#PKChoiceLabel").html( STRINGS[LANG].PKChoiceLabel )
    $( "#PrivateKeyLabel").html( STRINGS[LANG].PrivateKeyLabel );
    $( "#PrivateKeyLabel2").html( STRINGS[LANG].PrivateKeyLabel2 );
    $( "#PublicKeyLabel").html( STRINGS[LANG].PublicKeyLabel );
    $( "#CompPublicKeyLabel").html( STRINGS[LANG].CompPublicKeyLabel );
    $( "#EthAddrLabel").html( STRINGS[LANG].EthAddrLabel );
    $( "#BTCAddrLabel").html( STRINGS[LANG].BTCAddrLabel );
    $( "#PubKeyXLabel").html( STRINGS[LANG].PubKeyXLabel );
    $( "#PubKeyYLabel").html( STRINGS[LANG].PubKeyYLabel );

    $( "#BackButton" ).html( STRINGS[LANG].BackButton )
    $( "#BTCAddressLabel" ).html( STRINGS[LANG].BTCAddressLabel )
    $( "#BTCWIFLabel" ).html( STRINGS[LANG].BTCWIFLabel )
    $( "#EncodedWIFWarning" ).html( STRINGS[LANG].EncodedWIFWarning )
  }

  return {
    setLabels:setLabels
  };

})();

// this fixes $.wrap for v.3.17
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		

	 function isSVGElement( o ) {
        if (o instanceof SVGElement) {
            return true;
        } else {


        	
            if (typeof o === 'string') {
                return jQuery.inArray(o, ['altGlyph', 'altGlyphDef',
                                     'altGlyphItem', 'animate',
                                     'animateColor', 'animateMotion',
                                     'animateTransform', 'circle',
                                     'clipPath', 'color-profile',
                                     'cursor', 'defs', 'desc', 'ellipse',
                                     'feBlend', 'feColorMatrix',
                                     'feComponentTransfer',
                                     'feComposite', 'feConvolveMatrix',
                                     'feDiffuseLighting',
                                     'feDisplacementMap',
                                     'feDistantLight', 'feFlood',
                                     'feFuncA', 'feFuncB', 'feFuncG',
                                     'feFuncR', 'feGaussianBlur',
                                     'feImage', 'feMerge', 'feMergeNode',
                                     'feMorphology', 'feOffset',
                                     'fePointLight',
                                     'feSpecularLighting', 'feSpotLight',
                                     'feTile', 'feTurbulence', 'filter',
                                     'font', 'font-face',
                                     'font-face-format',
                                     'font-face-name', 'font-face-src',
                                     'font-face-uri', 'foreignObject',
                                     'g', 'glyph', 'glyphRef', 'hkern',
                                     'image', 'line', 'linearGradient',
                                     'marker', 'mask', 'metadata',
                                     'missing-glyph', 'mpath', 'path',
                                     'pattern', 'polygon', 'polyline',
                                     'radialGradient', 'rect',
                                     'set', 'stop', 'svg',
                                     'switch', 'symbol', 'text',
                                     'textPath', 'tref',
                                     'tspan', 'use', 'view',
                                     'vkern']) !== -1;
            }
            
        }
    }


 if ( isSVGElement( parsed[1] ) ) {
 	console.log("jquery found svg")
            return [ context.createElementNS(
                "http://www.w3.org/2000/svg",
                parsed[1]) ];
        } else {
            return [ context.createElement( parsed[1] ) ];
        }

	
	}




	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};



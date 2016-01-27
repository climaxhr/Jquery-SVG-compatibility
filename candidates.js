function cloneSVG(node,doc){
      if (!doc) doc=document;
      var clone = doc.createElementNS(node.namespaceURI,node.nodeName);
      for (var i=0,len=node.attributes.length;i<len;++i){
        var a = node.attributes[i];
        if (/^xmlns\b/.test(a.nodeName)) continue; // IE won't set xmlns/xmlns:foo attributes
        clone.setAttributeNS(a.namespaceURI,a.nodeName,a.nodeValue);
      }
      for (var i=0,len=node.childNodes.length;i<len;++i){
        var c = node.childNodes[i];
        clone.insertBefore(
          c.nodeType==1 ? cloneSVG(c,doc) : doc.createTextNode(c.nodeValue),
          null
        )
      }
      return clone;
}

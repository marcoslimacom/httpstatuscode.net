const httpStatusCode = {
  100: {
    title: "Continue",
    description:
      "The server has received the request headers and the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a <a target='_blank' href='https://en.wikipedia.org/wiki/POST_(HTTP)' title='POST (HTTP)'>POST</a> request). Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient. To have a server check the request's headers, a client must send <code>Expect: 100-continue</code> as a header in its initial request and receive a <code>100 Continue</code> status code in response before sending the body. If the client receives an error code such as 403 (Forbidden) or 405 (Method Not Allowed) then it should not send the request's body. The response <code>417 Expectation Failed</code> indicates that the request should be repeated without the <code>Expect</code> header as it indicates that the server does not support expectations (this is the case, for example, of HTTP/1.0 servers).<sup id='cite_ref-5' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-5'>[4]</a></sup>",
  },
  101: {
    title: "Switching Protocols",
    description:
      "The requester has asked the server to switch protocols and the server has agreed to do so.<sup id='cite_ref-6' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-6'>[5]</a></sup>",
  },
  102: {
    title: "Processing (WebDAV; RFC 2518)",
    description:
      "A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.<sup id='cite_ref-RFC_2518_7-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_2518-7'>[6]</a></sup> This prevents the client from timing out and assuming the request was lost.",
  },
  103: {
    title: "Early Hints (RFC 8297)",
    description:
      "Used to return some response headers before final HTTP message.<sup id='cite_ref-RFC_8297_8-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_8297-8'>[7]</a></sup>",
  },
  110: {
    title: "Response is Stale",
    description:
      "The response provided by a cache is stale (the content's age exceeds a maximum age set by a Cache-Control header or heuristically chosen lifetime).",
  },
  111: {
    title: "Revalidation Failed",
    description:
      "The cache was unable to validate the response, due to an inability to reach the origin server.",
  },
  112: {
    title: "Disconnected Operation",
    description:
      "The cache is intentionally disconnected from the rest of the network.",
  },
  113: {
    title: "Heuristic Expiration",
    description:
      "The cache heuristically chose a freshness lifetime greater than 24 hours and the response's age is greater than 24 hours.",
  },
  199: {
    title: "Miscellaneous Warning",
    description:
      "Arbitrary, non-specific warning. The warning text may be logged or presented to the user.",
  },
  200: {
    title: "OK",
    description:
      "Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.<sup id='cite_ref-RFC_2616_9-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_2616-9'>[8]</a></sup>",
  },
  201: {
    title: "Created",
    description:
      "The request has been fulfilled, resulting in the creation of a new resource.<sup id='cite_ref-10' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-10'>[9]</a></sup>",
  },
  202: {
    title: "Accepted",
    description:
      "The request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs.<sup id='cite_ref-11' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-11'>[10]</a></sup>",
  },
  203: {
    title: "Non-Authoritative Information (since HTTP/1.1)",
    description:
      "The server is a transforming proxy (e.g. a <i><a target='_blank' href='https://en.wikipedia.org/wiki/Web_accelerator' title='Web accelerator'>Web accelerator</a></i>) that received a 200 OK from its origin, but is returning a modified version of the origin's response.<sup id='cite_ref-12' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-12'>[11]</a></sup><sup id='cite_ref-13' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-13'>[12]</a></sup>",
  },
  204: {
    title: "No Content",
    description:
      "The server successfully processed the request, and is not returning any content.<sup id='cite_ref-14' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-14'>[13]</a></sup>",
  },
  205: {
    title: "Reset Content",
    description:
      "The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.<sup id='cite_ref-15' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-15'>[14]</a></sup>",
  },
  206: {
    title: "Partial Content (RFC 7233)",
    description:
      "The server is delivering only part of the resource (<a target='_blank' href='https://en.wikipedia.org/wiki/Byte_serving' title='Byte serving'>byte serving</a>) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.<sup id='cite_ref-16' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-16'>[15]</a></sup>",
  },
  207: {
    title: "Multi-Status (WebDAV; RFC 4918)",
    description:
      "The message body that follows is by default an <a target='_blank' href='https://en.wikipedia.org/wiki/XML' title='XML'>XML</a> message and can contain a number of separate response codes, depending on how many sub-requests were made.<sup id='cite_ref-RFC_4918_17-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_4918-17'>[16]</a></sup>",
  },
  208: {
    title: "Already Reported (WebDAV; RFC 5842)",
    description:
      "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.",
  },
  214: {
    title: "Transformation Applied",
    description:
      "Added by a proxy if it applies any transformation to the representation, such as changing the content encoding, media type or the like.",
  },
  218: {
    title: "This is fine (Apache Web Server)",
    description:
      "Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled.<sup class='noprint Inline-Template' style='white-space:nowrap;'>[<i><a target='_blank' href='https://en.wikipedia.org/wiki/Wikipedia:Accuracy_dispute#Disputed_statement' title='Wikipedia:Accuracy dispute'><span title='The material near this tag is possibly inaccurate or nonfactual. (October 2020)'>dubious</span></a> <span class='metadata'> – <a target='_blank' href='https://en.wikipedia.org/wiki/Talk:List_of_HTTP_status_codes#218_This_is_fine' title='Talk:List of HTTP status codes'>discuss</a></span></i>]</sup> When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.<sup id='cite_ref-ThisIsFine_70-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-ThisIsFine-70'>[69]</a></sup>  The phrase '<a target='_blank' href='https://en.wikipedia.org/wiki/Gunshow_(webcomic)#&quot;This_is_Fine&quot;' title='Gunshow (webcomic)'>This is fine</a>' is an <a target='_blank' href='https://en.wikipedia.org/wiki/Internet_meme' title='Internet meme'>Internet meme</a> referring to ignoring the situation or taking no action despite obvious evidence of an ongoing catastrophe.",
  },
  226: {
    title: "IM Used (RFC 3229)",
    description:
      "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.<sup id='cite_ref-RFC_3229_18-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_3229-18'>[17]</a></sup>",
  },
  299: {
    title: "Miscellaneous Persistent Warning",
    description: "Same as 199, but indicating a persistent warning.",
  },
  300: {
    title: "Multiple Choices",
    description:
      "Indicates multiple options for the resource from which the client may choose (via <a target='_blank' href='https://en.wikipedia.org/wiki/Content_negotiation#Agent-driven' title='Content negotiation'>agent-driven content negotiation</a>). For example, this code could be used to present multiple video format options, to list files with different <a target='_blank' href='https://en.wikipedia.org/wiki/Filename_extension' title='Filename extension'>filename extensions</a>, or to suggest <a target='_blank' href='https://en.wikipedia.org/wiki/Word-sense_disambiguation' title='Word-sense disambiguation'>word-sense disambiguation</a>.<sup id='cite_ref-20' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-20'>[19]</a></sup>",
  },
  301: {
    title: "Moved Permanently",
    description:
      "This and all future requests should be directed to the given <a target='_blank' href='https://en.wikipedia.org/wiki/Uniform_resource_identifier' class='mw-redirect' title='Uniform resource identifier'>URI</a>. <sup id='cite_ref-21' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-21'>[20]</a></sup>",
  },
  302: {
    title: "Found (Previously 'Moved temporarily')",
    description:
      "Tells the client to look at (browse to) another URL. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect with the same method (the original describing phrase was 'Moved Temporarily'),<sup id='cite_ref-RFC_1945_22-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_1945-22'>[21]</a></sup> but popular browsers implemented 302 redirects by changing the method to GET. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.<sup id='cite_ref-RFC7230-10_23-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC7230-10-23'>[22]</a></sup>",
  },
  303: {
    title: "See Other (since HTTP/1.1)",
    description:
      "The response to the request can be found under another <a target='_blank' href='https://en.wikipedia.org/wiki/Uniform_Resource_Identifier' title='Uniform Resource Identifier'>URI</a> using the GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a new GET request to the given URI.<sup id='cite_ref-24' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-24'>[23]</a></sup>",
  },
  304: {
    title: "Not Modified (RFC 7232)",
    description:
      "Indicates that the resource has not been modified since the version specified by the <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_Headers' title='List of HTTP header fields'>request headers</a> If-Modified-Since or If-None-Match. In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.<sup id='cite_ref-25' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-25'>[24]</a></sup>",
  },
  305: {
    title: "Use Proxy (since HTTP/1.1)",
    description:
      "The requested resource is available only through a proxy, the address for which is provided in the response. For security reasons, many HTTP clients (such as <a target='_blank' href='https://en.wikipedia.org/wiki/Firefox' title='Firefox'>Mozilla Firefox</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Internet_Explorer' title='Internet Explorer'>Internet Explorer</a>) do not obey this status code.<sup id='cite_ref-mozilla_bugzilla_bug_187996_comment_13_26-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-mozilla_bugzilla_bug_187996_comment_13-26'>[25]</a></sup>",
  },
  306: {
    title: "Switch Proxy",
    description:
      "No longer used. Originally meant 'Subsequent requests should use the specified proxy.'<sup id='cite_ref-27' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-27'>[26]</a></sup>",
  },
  307: {
    title: "Temporary Redirect (since HTTP/1.1)",
    description:
      "In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request.<sup id='cite_ref-SemanticsAndContent_28-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-SemanticsAndContent-28'>[27]</a></sup>",
  },
  308: {
    title: "Permanent Redirect (RFC 7538)",
    description:
      "This and all future requests should be directed to the given <a target='_blank' href='https://en.wikipedia.org/wiki/Uniform_resource_identifier' class='mw-redirect' title='Uniform resource identifier'>URI</a>. 308 parallel the behaviour of 301, but <i>does not allow the HTTP method to change</i>. So, for example, submitting a form to a permanently redirected resource may continue smoothly.<sup id='cite_ref-rfc7238_29-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-rfc7238-29'>[28]</a></sup>",
  },
  400: {
    title: "Bad Request",
    description:
      "The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).<sup id='cite_ref-rfc7231-400_31-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-rfc7231-400-31'>[30]</a></sup>",
  },
  401: {
    title: "Unauthorized (RFC 7235)",
    description:
      "Similar to <i>403 Forbidden</i>, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See <a target='_blank' href='https://en.wikipedia.org/wiki/Basic_access_authentication' title='Basic access authentication'>Basic access authentication</a> and <a target='_blank' href='https://en.wikipedia.org/wiki/Digest_access_authentication' title='Digest access authentication'>Digest access authentication</a>.<sup id='cite_ref-32' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-32'>[31]</a></sup> 401 semantically means 'unauthorised',<sup id='cite_ref-rfc7235-401_33-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-rfc7235-401-33'>[32]</a></sup> the user does not have valid authentication credentials for the target resource. <dd>Note: Some sites incorrectly issue HTTP 401 when an <a href='https://en.wikipedia.org/wiki/IP_address' title='IP address'>IP address</a> is banned from the website (usually the website domain) and that specific address is refused permission to access a website.<sup class='noprint Inline-Template Template-Fact' style='white-space:nowrap;'>[<i><a href='https://en.wikipedia.org/wiki/Wikipedia:Citation_needed' title='Wikipedia:Citation needed'><span title='This claim needs references to reliable sources. (September 2019)'>citation needed</span></a></i>]</sup></dd>",
  },
  402: {
    title: "Payment Required",
    description:
      "Reserved for future use. The original intention was that this code might be used as part of some form of <a target='_blank' href='https://en.wikipedia.org/wiki/Digital_cash' class='mw-redirect' title='Digital cash'>digital cash</a> or <a target='_blank' href='https://en.wikipedia.org/wiki/Micropayment' title='Micropayment'>micropayment</a> scheme, as proposed, for example, by <a target='_blank' href='https://en.wikipedia.org/wiki/GNU_Taler' title='GNU Taler'>GNU Taler</a>,<sup id='cite_ref-34' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-34'>[33]</a></sup> but that has not yet happened, and this code is not widely used. <a target='_blank' href='https://en.wikipedia.org/wiki/Google_Developers' title='Google Developers'>Google Developers</a> API uses this status if a particular developer has exceeded the daily limit on requests.<sup id='cite_ref-GoogleDevelopersErrorCode_35-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-GoogleDevelopersErrorCode-35'>[34]</a></sup> <a target='_blank' href='https://en.wikipedia.org/wiki/Sipgate' title='Sipgate'>Sipgate</a> uses this code if an account does not have sufficient funds to start a call.<sup id='cite_ref-36' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-36'>[35]</a></sup> <a target='_blank' href='https://en.wikipedia.org/wiki/Shopify' title='Shopify'>Shopify</a> uses this code when the store has not paid their fees and is temporarily disabled.<sup id='cite_ref-37' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-37'>[36]</a></sup> <a target='_blank' href='https://en.wikipedia.org/wiki/Stripe_(company)' title='Stripe (company)'>Stripe</a> uses this code for failed payments where parameters were correct, for example blocked fraudulent payments.<sup id='cite_ref-38' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-38'>[37]</a></sup>",
  },
  403: {
    title: "Forbidden",
    description:
      "The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed). This code is also typically used if the request provided authentication by answering the WWW-Authenticate header field challenge, but the server did not accept that authentication. The request should not be repeated.",
  },
  404: {
    title: "Not Found",
    description:
      "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
  },
  405: {
    title: "Method Not Allowed",
    description:
      "A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via <a target='_blank' href='https://en.wikipedia.org/wiki/POST_(HTTP)' title='POST (HTTP)'>POST</a>, or a PUT request on a read-only resource.",
  },
  406: {
    title: "Not Acceptable",
    description:
      "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.<sup id='cite_ref-39' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-39'>[38]</a></sup> See <a target='_blank' href='https://en.wikipedia.org/wiki/Content_negotiation' title='Content negotiation'>Content negotiation</a>.",
  },
  407: {
    title: "Proxy Authentication Required (RFC 7235)",
    description:
      "The client must first authenticate itself with the <a target='_blank' href='https://en.wikipedia.org/wiki/Proxy_server' title='Proxy server'>proxy</a>.<sup id='cite_ref-40' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-40'>[39]</a></sup>",
  },
  408: {
    title: "Request Timeout",
    description:
      "The server timed out waiting for the request. According to HTTP specifications: 'The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.'<sup id='cite_ref-41' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-41'>[40]</a></sup>",
  },
  409: {
    title: "Conflict",
    description:
      "Indicates that the request could not be processed because of conflict in the current state of the resource, such as an <a target='_blank' href='https://en.wikipedia.org/wiki/Edit_conflict' title='Edit conflict'>edit conflict</a> between multiple simultaneous updates.",
  },
  410: {
    title: "Gone",
    description:
      "Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices.<sup id='cite_ref-HTTP_410_42-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-HTTP_410-42'>[41]</a></sup> Most use cases do not require clients and search engines to purge the resource, and a '404 Not Found' may be used instead.",
  },
  411: {
    title: "Length Required",
    description:
      "The request did not specify the length of its content, which is required by the requested resource.<sup id='cite_ref-43' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-43'>[42]</a></sup>",
  },
  412: {
    title: "Precondition Failed (RFC 7232)",
    description:
      "The server does not meet one of the preconditions that the requester put on the request header fields.<sup id='cite_ref-44' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-44'>[43]</a></sup>",
  },
  413: {
    title: "Payload Too Large (RFC 7231)",
    description:
      "The request is larger than the server is willing or able to process. Previously called 'Request Entity Too Large'.<sup id='cite_ref-45' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-45'>[44]</a></sup>",
  },
  414: {
    title: "URI Too Long (RFC 7231)",
    description:
      "The <a target='_blank' href='https://en.wikipedia.org/wiki/URI' class='mw-redirect' title='URI'>URI</a> provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request.<sup id='cite_ref-46' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-46'>[45]</a></sup> Called 'Request-URI Too Long' previously.<sup id='cite_ref-47' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-47'>[46]</a></sup>",
  },
  415: {
    title: "Unsupported Media Type (RFC 7231)",
    description:
      "The request entity has a <a target='_blank' href='https://en.wikipedia.org/wiki/Internet_media_type' class='mw-redirect' title='Internet media type'>media type</a> which the server or resource does not support. For example, the client uploads an image as <a target='_blank' href='https://en.wikipedia.org/wiki/Scalable_Vector_Graphics' title='Scalable Vector Graphics'>image/svg+xml</a>, but the server requires that images use a different format.<sup id='cite_ref-48' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-48'>[47]</a></sup>",
  },
  416: {
    title: "Range Not Satisfiable (RFC 7233)",
    description:
      "The client has asked for a portion of the file (<a target='_blank' href='https://en.wikipedia.org/wiki/Byte_serving' title='Byte serving'>byte serving</a>), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.<sup id='cite_ref-49' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-49'>[48]</a></sup> Called 'Requested Range Not Satisfiable' previously.<sup id='cite_ref-50' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-50'>[49]</a></sup>",
  },
  417: {
    title: "Expectation Failed",
    description:
      "The server cannot meet the requirements of the Expect request-header field.<sup id='cite_ref-51' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-51'>[50]</a></sup>",
  },
  418: {
    title: "I'm a teapot (RFC 2324, RFC 7168)",
    description:
      "This code was defined in 1998 as one of the traditional <a target='_blank' href='https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force' title='Internet Engineering Task Force'>IETF</a> <a target='_blank' href='https://en.wikipedia.org/wiki/April_Fools%27_Day_RFC' class='mw-redirect' title='April Fools' Day RFC'>April Fools' jokes</a>, in RFC 2324, <i><a target='_blank' href='https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol' title='Hyper Text Coffee Pot Control Protocol'>Hyper Text Coffee Pot Control Protocol</a></i>, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee.<sup id='cite_ref-52' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-52'>[51]</a></sup> This HTTP status is used as an <a target='_blank' href='https://en.wikipedia.org/wiki/Easter_egg_(media)' title='Easter egg (media)'>Easter egg</a> in some websites, such as <a target='_blank' href='https://en.wikipedia.org/wiki/Google.com' class='mw-redirect' title='Google.com'>Google.com's</a> <a rel='nofollow' class='external text' href='https://www.google.com/teapot'>I'm a teapot</a> easter egg.<sup id='cite_ref-53' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-53'>[52]</a></sup><sup id='cite_ref-54' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-54'>[53]</a></sup>",
  },
  419: {
    title: "Page Expired (Laravel Framework)",
    description:
      "Used by the Laravel Framework when a CSRF Token is missing or expired.",
  },
  420: {
    title: "Enhance Your Calm (Twitter)",
    description:
      "Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the <a target='_blank' href='https://en.wikipedia.org#429'>429 Too Many Requests</a> response code instead.<sup id='cite_ref-TwitterErrorCodes_72-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-TwitterErrorCodes-72'>[71]</a></sup> The phrase 'Enhance your calm' comes from the <a target='_blank' href='https://en.wikipedia.org/wiki/1993_movie' class='mw-redirect' title='1993 movie'>1993 movie</a> <i><a target='_blank' href='https://en.wikipedia.org/wiki/Demolition_Man_(film)' title='Demolition Man (film)'>Demolition Man</a></i>, and its association with this number is likely a <a target='_blank' href='https://en.wikipedia.org/wiki/420_(cannabis_culture)' title='420 (cannabis culture)'>reference to cannabis</a>.<sup class='noprint Inline-Template Template-Fact' style='white-space:nowrap;'>[<i><a target='_blank' href='https://en.wikipedia.org/wiki/Wikipedia:Citation_needed' title='Wikipedia:Citation needed'><span title='This claim needs references to reliable sources. (August 2020)'>citation needed</span></a></i>]</sup>",
  },
  421: {
    title: "Misdirected Request (RFC 7540)",
    description:
      "The request was directed at a server that is not able to produce a response<sup id='cite_ref-55' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-55'>[54]</a></sup> (for example because of connection reuse).<sup id='cite_ref-56' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-56'>[55]</a></sup>",
  },
  422: {
    title: "Unprocessable Entity (WebDAV; RFC 4918)",
    description:
      "The request was well-formed but was unable to be followed due to semantic errors.<sup id='cite_ref-RFC_4918_17-1' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_4918-17'>[16]</a></sup>",
  },
  423: {
    title: "Locked (WebDAV; RFC 4918)",
    description:
      "The resource that is being accessed is locked.<sup id='cite_ref-RFC_4918_17-2' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_4918-17'>[16]</a></sup>",
  },
  424: {
    title: "Failed Dependency (WebDAV; RFC 4918)",
    description:
      "The request failed because it depended on another request and that request failed (e.g., a PROPPATCH).<sup id='cite_ref-RFC_4918_17-3' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_4918-17'>[16]</a></sup>",
  },
  425: {
    title: "Too Early (RFC 8470)",
    description:
      "Indicates that the server is unwilling to risk processing a request that might be replayed.",
  },
  426: {
    title: "Upgrade Required",
    description:
      "The client should switch to a different protocol such as <a target='_blank' href='https://en.wikipedia.org/wiki/Transport_Layer_Security' title='Transport Layer Security'>TLS/1.3</a>, given in the <a target='_blank' href='https://en.wikipedia.org/wiki/Upgrade_header' class='mw-redirect' title='Upgrade header'>Upgrade header</a> field.<sup id='cite_ref-57' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-57'>[56]</a></sup>",
  },
  428: {
    title: "Precondition Required (RFC 6585)",
    description:
      "The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.<sup id='cite_ref-rfc6585_58-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-rfc6585-58'>[57]</a></sup>",
  },
  429: {
    title: "Too Many Requests (RFC 6585)",
    description:
      "The user has sent too many requests in a given amount of time. Intended for use with <a target='_blank' href='https://en.wikipedia.org/wiki/Rate_limiting' title='Rate limiting'>rate-limiting</a> schemes.<sup id='cite_ref-rfc6585_58-1' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-rfc6585-58'>[57]</a></sup>",
  },
  430: {
    title: "Request Header Fields Too Large (Shopify)",
    description:
      "Used by <a target='_blank' href='https://en.wikipedia.org/wiki/Shopify' title='Shopify'>Shopify</a>, instead of the <a target='_blank' href='https://en.wikipedia.org#429'>429 Too Many Requests</a> response code, when too many URLs are requested within a certain time frame.<sup id='cite_ref-73' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-73'>[72]</a></sup>",
  },
  431: {
    title: "Request Header Fields Too Large (RFC 6585)",
    description:
      "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.<sup id='cite_ref-rfc6585_58-2' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-rfc6585-58'>[57]</a></sup>",
  },
  440: {
    title: "Login Time-out",
    description:
      "The client's session has expired and must log in again.<sup id='cite_ref-MS_KB941201_81-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-MS_KB941201-81'>[80]</a></sup>",
  },
  444: {
    title: "No Response",
    description:
      "Used internally<sup id='cite_ref-88' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-88'>[87]</a></sup> to instruct the server to return no information to the client and close the connection immediately.",
  },
  449: {
    title: "Retry With",
    description:
      "The server cannot honour the request because the user has not provided the required information.<sup id='cite_ref-MS_DD891478_82-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-MS_DD891478-82'>[81]</a></sup>",
  },
  450: {
    title: "Blocked by Windows Parental Controls (Microsoft)",
    description:
      "The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.<sup id='cite_ref-74' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-74'>[73]</a></sup>",
  },
  451: {
    title: "Redirect",
    description:
      "Used in <a target='_blank' href='https://en.wikipedia.org/wiki/Exchange_ActiveSync' title='Exchange ActiveSync'>Exchange ActiveSync</a> when either a more efficient server is available or the server cannot access the users' mailbox.<sup id='cite_ref-83' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-83'>[82]</a></sup> The client is expected to re-run the HTTP AutoDiscover operation to find a more appropriate server.<sup id='cite_ref-84' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-84'>[83]</a></sup>",
  },
  460: {
    title: "",
    description:
      "Client closed the connection with the load balancer before the idle timeout period elapsed. Typically when client timeout is sooner than the Elastic Load Balancer's timeout.<sup id='cite_ref-:0_93-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-:0-93'>[92]</a></sup>",
  },
  463: {
    title: "",
    description:
      "The load balancer received an X-Forwarded-For request header with more than 30 IP addresses.<sup id='cite_ref-:0_93-1' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-:0-93'>[92]</a></sup>",
  },
  494: {
    title: "Request header too large",
    description: "Client sent too large request or too long header line.",
  },
  495: {
    title: "SSL Certificate Error",
    description:
      "An expansion of the <a target='_blank' href='https://en.wikipedia.org#400'>400 Bad Request</a> response code, used when the client has provided an invalid <a target='_blank' href='https://en.wikipedia.org/wiki/Client_certificate' title='Client certificate'>client certificate</a>.",
  },
  496: {
    title: "SSL Certificate Required",
    description:
      "An expansion of the <a target='_blank' href='https://en.wikipedia.org#400'>400 Bad Request</a> response code, used when a client certificate is required but not provided.",
  },
  497: {
    title: "HTTP Request Sent to HTTPS Port",
    description:
      "An expansion of the <a target='_blank' href='https://en.wikipedia.org#400'>400 Bad Request</a> response code, used when the client has made a HTTP request to a port listening for HTTPS requests.",
  },
  498: {
    title: "Invalid Token (Esri)",
    description:
      "Returned by <a target='_blank' href='https://en.wikipedia.org/wiki/ArcGIS_Server' title='ArcGIS Server'>ArcGIS for Server</a>. Code 498 indicates an expired or otherwise invalid token.<sup id='cite_ref-arcgis_75-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-arcgis-75'>[74]</a></sup>",
  },
  499: {
    title: "Client Closed Request",
    description:
      "Used when the client has closed the request before the server could send a response.",
  },
  500: {
    title: "Internal Server Error",
    description:
      "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.<sup id='cite_ref-62' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-62'>[61]</a></sup>",
  },
  501: {
    title: "Not Implemented",
    description:
      "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API).<sup id='cite_ref-63' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-63'>[62]</a></sup>",
  },
  502: {
    title: "Bad Gateway",
    description:
      "The server was acting as a <a target='_blank' href='https://en.wikipedia.org/wiki/Gateway_(telecommunications)' title='Gateway (telecommunications)'>gateway</a> or proxy and received an invalid response from the upstream server.<sup id='cite_ref-64' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-64'>[63]</a></sup>",
  },
  503: {
    title: "Service Unavailable",
    description:
      "The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.<sup id='cite_ref-65' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-65'>[64]</a></sup>",
  },
  504: {
    title: "Gateway Timeout",
    description:
      "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.<sup id='cite_ref-66' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-66'>[65]</a></sup>",
  },
  505: {
    title: "HTTP Version Not Supported",
    description:
      "The server does not support the HTTP protocol version used in the request.<sup id='cite_ref-67' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-67'>[66]</a></sup>",
  },
  506: {
    title: "Variant Also Negotiates (RFC 2295)",
    description:
      "Transparent <a target='_blank' href='https://en.wikipedia.org/wiki/Content_negotiation' title='Content negotiation'>content negotiation</a> for the request results in a <a target='_blank' href='https://en.wikipedia.org/wiki/Circular_reference' title='Circular reference'>circular reference</a>.<sup id='cite_ref-RFC_2295_68-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_2295-68'>[67]</a></sup>",
  },
  507: {
    title: "Insufficient Storage (WebDAV; RFC 4918)",
    description:
      "The server is unable to store the representation needed to complete the request.<sup id='cite_ref-RFC_4918_17-4' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_4918-17'>[16]</a></sup>",
  },
  508: {
    title: "Loop Detected (WebDAV; RFC 5842)",
    description:
      "The server detected an infinite loop while processing the request (sent instead of <a target='_blank' href='https://en.wikipedia.org#208'>208 Already Reported</a>).",
  },
  509: {
    title: "Bandwidth Limit Exceeded (Apache Web Server/cPanel)",
    description:
      "The server has exceeded the bandwidth specified by the server administrator; this is often used by shared hosting providers to limit the bandwidth of customers.<sup id='cite_ref-76' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-76'>[75]</a></sup>",
  },
  510: {
    title: "Not Extended (RFC 2774)",
    description:
      "Further extensions to the request are required for the server to fulfil it.<sup id='cite_ref-RFC_2774_69-0' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-RFC_2774-69'>[68]</a></sup>",
  },
  511: {
    title: "Network Authentication Required (RFC 6585)",
    description:
      "The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., '<a target='_blank' href='https://en.wikipedia.org/wiki/Captive_portal' title='Captive portal'>captive portals</a>' used to require agreement to Terms of Service before granting full Internet access via a <a target='_blank' href='https://en.wikipedia.org/wiki/Hotspot_(Wi-Fi)' title='Hotspot (Wi-Fi)'>Wi-Fi hotspot</a>).<sup id='cite_ref-rfc6585_58-3' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-rfc6585-58'>[57]</a></sup>",
  },
  520: {
    title: "Web Server Returned an Unknown Error",
    description:
      "The origin server returned an empty, unknown, or unexpected response to Cloudflare.<sup id='cite_ref-90' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-90'>[89]</a></sup>",
  },
  521: {
    title: "Web Server Is Down",
    description:
      "The origin server refused connections from Cloudflare. Security solutions at the origin may be blocking legitimate connections from certain Cloudflare IP addresses.",
  },
  522: {
    title: "Connection Timed Out",
    description: "Cloudflare timed out contacting the origin server.",
  },
  523: {
    title: "Origin Is Unreachable",
    description:
      "Cloudflare could not reach the origin server; for example, if the <a target='_blank' href='https://en.wikipedia.org/wiki/DNS_record' class='mw-redirect' title='DNS record'>DNS records</a> for the origin server are incorrect or missing.",
  },
  524: {
    title: "A Timeout Occurred",
    description:
      "Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.",
  },
  525: {
    title: "SSL Handshake Failed",
    description:
      "Cloudflare could not negotiate a <a target='_blank' href='https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_handshake' title='Transport Layer Security'>SSL/TLS handshake</a> with the origin server.",
  },
  526: {
    title: "Invalid SSL Certificate",
    description:
      "Cloudflare could not validate the SSL certificate on the origin web server. Also used by <a target='_blank' href='https://en.wikipedia.org/wiki/Cloud_Foundry' title='Cloud Foundry'>Cloud Foundry</a>'s gorouter.",
  },
  527: {
    title: "Railgun Error",
    description:
      "Error 527 indicates an interrupted connection between Cloudflare and the origin server's Railgun server.<sup id='cite_ref-91' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-91'>[90]</a></sup>",
  },
  529: {
    title: "Site is overloaded",
    description:
      "Used by <a target='_blank' href='https://en.wikipedia.org/wiki/Qualys' title='Qualys'>Qualys</a> in the SSLLabs server testing API to signal that the site can't process the request.<sup id='cite_ref-77' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-77'>[76]</a></sup>",
  },
  530: {
    title: "Site is frozen",
    description:
      "Error 530 is returned along with a 1xxx error.<sup id='cite_ref-92' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-92'>[91]</a></sup>",
  },
  561: {
    title: "Unauthorized",
    description:
      "An error around authentication returned by a server registered with a load balancer. You configured a listener rule to authenticate users, but the identity provider (IdP) returned an error code when authenticating the user.<sup id='cite_ref-94' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-94'>[93]</a></sup>",
  },
  598: {
    title: "(Informal convention) Network read timeout error",
    description:
      "Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.<sup id='cite_ref-79' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-79'>[78]</a></sup>",
  },
  599: {
    title: "Network Connect Timeout Error",
    description:
      "An error used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.<sup id='cite_ref-80' class='reference'><a target='_blank' href='https://en.wikipedia.org#cite_note-80'>[79]</a></sup>",
  },
};

export default httpStatusCode;

I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), JSON.parse('{"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"carts":{"cart":{"checkout":"Checkout","empty":"Empty cart","title":"Your Cart"}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\\nPlease make sure a rails development server is running.\\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","blank":"can\'t be blank","confirmation":"doesn\'t match %{attribute}","empty":"can\'t be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"unacceptable_request":"A supported version is expected in the Accept header.\\n","unavailable_session":"Session %{id} is no longer available in memory.\\n\\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\\nthis request hit doesn\'t store %{id} in memory. Consider turning the number of\\nprocesses/workers to one (1) or using a different server in development.\\n"},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"layouts":{"application":{"contact":"Contact","home":"Home","news":"News","questions":"Questions","title":"The Pragmatic Bookshelf"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"orders":{"form":{"address_html":"Address","check_pay_type":{"account_number":"Account #","routing_number":"Routing #"},"credit_card_pay_type":{"cc_number":"CC #","expiration_date":"Expiry"},"email":"E-mail","name":"Name","pay_prompt_html":"Select a payment method","pay_type":"Pay with","pay_types":{"check":"Check","credit_card":"Credit Card","purchase_order":"Purchase Order"},"purchase_order_pay_type":{"po_number":"PO #"},"submit":"Place Order"},"new":{"legend":"Please Enter Your Details"},"thanks":"Thank you for your order"},"store":{"index":{"add_html":"Add to Cart","title_html":"Your Pragmatic Catalog"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"}}'));
I18n.translations["es"] = I18n.extend((I18n.translations["es"] || {}), JSON.parse('{"carts":{"cart":{"checkout":"Comprar","empty":"Vaciar Carrito","title":"Carrito de la Compra"}},"layouts":{"application":{"contact":"Contacto","home":"Inicio","news":"Noticias","questions":"Preguntas","title":"Biblioteca de Pragmatic"}},"number":{"currency":{"format":{"delimiter":".","format":"%n\\u0026nbsp;%u","precision":2,"separator":",","unit":"$US"}}},"orders":{"activerecord":{"attributes":{"order":{"address":"Direcci\\u0026oacute;n","email":"E-mail","name":"Nombre","pay_type":"Forma de pago"}},"models":{"order":"pedido"}},"errors":{"template":{"body":"Hay problemas con los siguientes campos:","header":{"one":"1 error ha impedido que este %{model} se guarde","other":"%{count} errores han impedido que este %{model} se guarde"}}},"form":{"address_html":"Direcci\\u0026oacute;n","check_pay_type":{"account_number":"# de Cuenta","routing_number":"# de Enrutamiento"},"credit_card_pay_type":{"cc_number":"Número","expiration_date":"Expiración"},"email":"E-mail","name":"Nombre","pay_prompt_html":"Seleccione un método de pago","pay_type":"Forma de pago","pay_types":{"check":"Cheque","credit_card":"Tarjeta de Crédito","purchase_order":"Orden de Compra"},"purchase_order_pay_type":{"po_number":"Número"},"submit":"Realizar Pedido"},"new":{"legend":"Por favor, introduzca sus datos"},"thanks":"Gracias por su pedido"},"store":{"index":{"add_html":"A\\u0026ntilde;adir al Carrito","title_html":"Su Cat\\u0026aacute;logo de Pragmatic"}}}'));

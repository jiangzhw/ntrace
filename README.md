nTrace 0.0.4
======

About
-------

nTrace is a command-line security tool to detect Cross-Site Tracing (XST) vulnerabilities, written in node. An XST attack is typically used in conjunction with an XSS attack, making it additionally devestating.

Install
-------



```
git clone git://github.com/gabemarshall/ntrace.git
```

Use
-------
```
./ntrace.js --url=<www.url.com> --https=<yes or no>

./ntrace.js --url=www.google.com https=yes
```

Expected Response(s)
-------
```
VULNERABLE: Site responded with a 200 Okay and is susceptible to XST
```
```
SAFE: This site does not appear to be susceptible to XST
```
```
SAFE: There was a problem with the request meaning TRACE is definitely not supported (error message will be appended, typically socket hangup).
```
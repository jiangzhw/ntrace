nTrace 0.0.5
======

About
-------

nTrace is a command-line security tool to detect Cross-Site Tracing (XST) vulnerabilities, written in node. An XST attack is typically used in conjunction with an XSS attack, making it additionally devestating.

8-16-13

Updated the TRACE request to also include a custom header. nTrace will then look for that same header in the response to determine whether or not the site is truly vulnerable to XST attacks.

Install
-------

```
npm install -g ntrace
```
OR
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
VULNERABLE: Site responded with our custom header meaning it is susceptible to XST attacks
```
```
SAFE: This site does not appear to be susceptible to XST
```
```
There was a problem with the request, which might mean TRACE is not supported.
To be safe, try the request again and change the --https flag
(error message will be appended, typically socket hangup).
```
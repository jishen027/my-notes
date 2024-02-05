"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[4342],{1427:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var i=s(5893),l=s(1151);const t={},r=void 0,d={id:"Redis/Redis_note",title:"Redis_note",description:"1. what is redis?",source:"@site/docs/Redis/Redis_note.md",sourceDirName:"Redis",slug:"/Redis/Redis_note",permalink:"/docs/Redis/Redis_note",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redis/Redis_note.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install_Redis_Docker",permalink:"/docs/Redis/Install_Redis_Docker"},next:{title:"Dependency_Inversion_Principle",permalink:"/docs/SOLID/Dependency_Inversion_Principle"}},a={},h=[];function c(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"what is redis?"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"what is redis used for?"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Redis is an in-memory data structure store, used as a database, cache and message broker."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Data Types"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Strings"}),"\n",(0,i.jsx)(n.li,{children:"Lists"}),"\n",(0,i.jsx)(n.li,{children:"Sets"}),"\n",(0,i.jsx)(n.li,{children:"Sorted Sets"}),"\n",(0,i.jsx)(n.li,{children:"Hashes"}),"\n",(0,i.jsx)(n.li,{children:"Bitmaps"}),"\n",(0,i.jsx)(n.li,{children:"HyperLogLogs"}),"\n",(0,i.jsx)(n.li,{children:"Geospatial Indexes"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Redis Commands"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SET key value\nSet the string value of a key. e.g. SET mykey "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"GET key\nGet the value of a key. e.g. GET mykey"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DEL key\nDelete a key. e.g. DEL mykey"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"EXISTS key\nDetermine if a key exists. e.g. EXISTS mykey"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'MSET key value [key value ...]\nSet multiple keys to multiple values. e.g. MSET key1 "Hello" key2 "World"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"MGET key [key ...]\nGet the values of all the given keys. e.g. MGET key1 key2"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"RANGE key start stop\nGet a substring of the string stored at a key. e.g. RANGE mykey 0 3, RANGE mykey -2 -1"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SETRANGE key offset value\nOverwrite part of a string at key starting at the specified offset. e.g. SETRANGE mykey 0 "Hello"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Redis Configuration"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Redis configuration file is located at /etc/redis/redis.conf"}),"\n",(0,i.jsx)(n.li,{children:"Redis configuration file is divided into sections, denoted by square brackets. e.g. [section_name]"}),"\n",(0,i.jsx)(n.li,{children:"Redis configuration file is composed of simple key-value pairs. e.g. bind"}),"\n",(0,i.jsx)(n.li,{children:"Docker redis configuration file is located at /usr/local/etc/redis/redis.conf"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -d --name redis -p 6379:6379 redis redis-server --appendonly yes -v /Users/zhengyansheng/redis/redis.conf:/usr/local/etc/redis/redis.conf\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Redis Options"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SET name "zhengyansheng" EX 10 NX\nEX seconds -- Set the specified expire time, in seconds.\nNX -- Only set the key if it does not already exist.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SET name "zhengyansheng" PX 10000 NX\nPX milliseconds -- Set the specified expire time, in milliseconds.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SET name "zhengyansheng" XX\nXX -- Only set the key if it already exist.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SET name "zhengyansheng" GET\nGET -- Get the value of a key and set its value to a new one.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"Sets"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SADD key member [member ...]\nAdd one or more members to a set. e.g. SADD myset "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SMEMBERS key\nGet all the members in a set. e.g. SMEMBERS myset"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SISMEMBER key member\nDetermine if a given value is a member of a set. e.g. SISMEMBER myset "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'SREM key member [member ...]\nRemove one or more members from a set. e.g. SREM myset "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"SUNION key [key ...]\nAdd multiple sets. e.g. SUNION set1 set2"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"Lists"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'LPUSH key value [value ...]\nPrepend one or multiple values to a list. e.g. LPUSH mylist "World"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'RPUSH key value [value ...]\nAppend one or multiple values to a list. e.g. RPUSH mylist "World"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"LRANGE key start stop\nGet a range of elements from a list. e.g. LRANGE mylist 0 3"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"LPOP key\nRemove and get the first element in a list. e.g. LPOP mylist"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"RPOP key\nRemove and get the last element in a list. e.g. RPOP mylist"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"LLEN key\nGet the length of a list. e.g. LLEN mylist"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'LREM key count value\nRemove elements from a list. e.g. LREM mylist 2 "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'LSET key index value\nSet the value of an element in a list by its index. e.g. LSET mylist 0 "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"LTRIM key start stop\nTrim a list to the specified range. e.g. LTRIM mylist 0 2"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsx)(n.li,{children:"Hashes"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'HSET key field value\nSet the string value of a hash field. e.g. HSET myhash field1 "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HGET key field\nGet the value of a hash field. e.g. HGET myhash field1"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HGETALL key\nGet all the fields and values in a hash. e.g. HGETALL myhash"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HDEL key field [field ...]\nDelete one or more hash fields. e.g. HDEL myhash field1"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HEXISTS key field\nDetermine if a hash field exists. e.g. HEXISTS myhash field1"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HINCRBY key field increment\nIncrement the integer value of a hash field by the given number. e.g. HINCRBY myhash field1 5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HKEYS key\nGet all the fields in a hash. e.g. HKEYS myhash"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HLEN key\nGet the number of fields in a hash. e.g. HLEN myhash"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HMGET key field [field ...]\nGet the values of all the given hash fields. e.g. HMGET myhash field1 field2"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'HMSET key field value [field value ...]\nSet multiple hash fields to multiple values. e.g. HMSET myhash field1 "Hello" field2 "World"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'HSETNX key field value\nSet the value of a hash field, only if the field does not exist. e.g. HSETNX myhash field1 "Hello"'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"HVALS key\nGet all the values in a hash. e.g. HVALS myhash"}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var i=s(7294);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
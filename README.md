*re-use context*
#1 creante a context . so that i can share the state of user across the application
#2 crate a provider to reuse the context

#3 create user via context
4# login user via context
5# set observer : one single plase (inside the provider) ==> if the user state on firebase change that time update the user information in state

6# use observer inside useEffect => set the observer one time => clean up memory after unmount
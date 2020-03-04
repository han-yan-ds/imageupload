create database avatars;

\c avatars;

create table images (
  imageid serial primary key,
  imagename varchar(255),
  imagepath varchar(511)
)
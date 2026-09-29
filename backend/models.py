from datetime import datetime
from sqlalchemy import DateTime , ForeignKey , Integer , String , Text
from sqlalchemy.orm import Mapped , mapped_column , relationship
from database import Base

class Level(Base):
    __tablename__ = "levels"

    id: Mapped[str] = mapped_column(String(100) , primary_key = True)
    scenario: Mapped[str] = mapped_column(Text , nullable=False)

    objects: Mapped[list["LevelObject"]] = relationship(
        back_populates = "level",
        cascade = "all , delete-orphan",
    )

    submissions : Mapped[list["Submission"]] = relationship(
        back_populates = "level",
        cascade = "all , delete-orphan",
    )

class LevelObject(Base):
    __tablename__ = "level_objects"
    id: Mapped[str] = mapped_column(String(100) , primary_key=True)
    level_id : Mapped[str] = mapped_column(
        ForeignKey("levels.id"),
        nullable=False,
    )
    name: Mapped[str] = mapped_column(String(100) , nullable=False)
    points: Mapped[int] = mapped_column(Integer, nullable=False)
    level: Mapped["Level"] = relationship(
        back_populates = "objects"
    )

class Submission(Base):
    __tablename__ = "submissions"
    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True,
    )
    level_id: Mapped[str] = mapped_column(
        ForeignKey("levels.id"),
        nullable=False,
    )
    session_id: Mapped[str] = mapped_column(
        String(100),
        nullable = False,
    )
    score: Mapped[int] = mapped_column(
        Integer , 
        nullable = False,
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime ,
        default = datetime.utcnow,
        nullable = False,
    )
    level: Mapped["Level"] = relationship(
        back_populates="submissions"
    )
    selected_items: Mapped[list["SubmissionItem"]] = relationship(
        back_populates = "submission",
        cascade = "all , delete-orphan",
    )

class SubmissionItem(Base):
    __tablename__ = "submission_items"

    id:Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True,
    )
    submission_id: Mapped[int] = mapped_column(
        ForeignKey("submissions.id"),
        nullable = False,
    )
    object_id: Mapped[str] = mapped_column(
        ForeignKey("level_objects.id"),
        nullable = False,
    )
    submission: Mapped["Submission"] = relationship(
        back_populates= "selected_items"
    )
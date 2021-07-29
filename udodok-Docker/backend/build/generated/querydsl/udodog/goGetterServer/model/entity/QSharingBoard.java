package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSharingBoard is a Querydsl query type for SharingBoard
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSharingBoard extends EntityPathBase<SharingBoard> {

    private static final long serialVersionUID = 545228522L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSharingBoard sharingBoard = new QSharingBoard("sharingBoard");

    public final StringPath bookTitle = createString("bookTitle");

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> likeCnt = createNumber("likeCnt", Integer.class);

    public final ListPath<SharingBoardReply, QSharingBoardReply> sharingBoardReplyList = this.<SharingBoardReply, QSharingBoardReply>createList("sharingBoardReplyList", SharingBoardReply.class, QSharingBoardReply.class, PathInits.DIRECT2);

    public final StringPath title = createString("title");

    public final QUser user;

    public QSharingBoard(String variable) {
        this(SharingBoard.class, forVariable(variable), INITS);
    }

    public QSharingBoard(Path<? extends SharingBoard> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSharingBoard(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSharingBoard(PathMetadata metadata, PathInits inits) {
        this(SharingBoard.class, metadata, inits);
    }

    public QSharingBoard(Class<? extends SharingBoard> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

